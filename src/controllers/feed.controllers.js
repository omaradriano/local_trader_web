const staticRoute = { root: 'src/public' }

import { pool } from '../dbConn.js'
//generador de Id de post
import { v4 as uuid_v4 } from 'uuid'

//Función para cargar el feed en caso de que haya una sesión iniciada
export const loadFeed = async (req, res) => {
    try {
        const [data] = await pool.query('select * from local_trader.post')
        if (!req.session.userData) { //En caso de que no existan datos de login, renderizar todo sin permiso de eliminar publicaciones
            // console.log(data);
            req.session.postsData = data
            const userData = undefined
            res.render('feed', { data, userData })
        }else{ //En caso de que si exista una sesion, enviar los datos de sesión y renderizar con permisos de borrado.
            const userData = req.session.userData
            // console.log(userData);
            res.render('feed', { data, userData })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Ha ocurrido un error inesperado'
        })
    }
}

//Función para agregar un post únicamente cuando hay un usuario loggeado, si no hay log no se podrán agregar tareas.
export const addPost = async (req, res) => {
    const { titulo, descripcion, precio } = req.body
    const generatedID = uuid_v4()
    
    if(req.session.userData){
        const nControl = req.session.userData.n_control
        const data = await pool.query('call addPost (?,?,?,?,?)', [titulo, generatedID, nControl, descripcion, precio])
        console.log('Articulo agregado');
        res.redirect(303, '/')
    }   
}

//De igual manera la opción de borrar un post depende de si está loggeado o no, solo los creadores de la publicación pueden borrarla.
export const deletePost = async (req, res) => {
    const { id_venta } = req.params
    try {
        await pool.query('delete from local_trader.post where id_venta = (?)', [id_venta])
        console.log('Articulo eliminado');
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

