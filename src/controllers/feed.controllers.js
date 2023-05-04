const staticRoute = { root: 'src/public' }

import { pool } from '../dbConn.js'
//generador de Id de post
import { v4 as uuid_v4 } from 'uuid'

export const loadFeed = async (req, res) => {
    // if (!req.session.userData) {
    //     console.log('No existe usuario');
    //     const [data] = await pool.query('select * from local_trader.post')
    //     // res.send(data)
    //     res.render('feed', { data })
    // } else {
    //     // const nControl = req.session.userData.n_control_cliente
    //     const [data] = await pool.query('select * from local_trader.post where n_control_cliente = (?)', [req.session.userData.n_control_cliente])
    //     res.render('feed', { data })
    // }
    req.session.userData ? console.log(req.session.userData) : null;
    try {
        if (!req.session.userData) {
            const userData = undefined
            const [data] = await pool.query('select * from local_trader.post')
            res.render('feed', { data, userData })
        }else{
            const [data] = await pool.query('select * from local_trader.post')
            const userData = req.session.userData
            res.render('feed', { data, userData })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Ha ocurrido un error inesperado'
        })
    }
}

export const addPost = async (req, res) => {
    const { titulo, descripcion, precio } = req.body
    const generatedID = uuid_v4()
    
    // try {
    //     if(req.session.userData){
    //         const nControl = req.session.userData.n_control_cliente
    //         const data = await pool.query('call addPost (?,?,?,?,?)', [titulo, generatedID, nControl, descripcion, precio])
    //         console.log('Articulo agregado');
    //         res.redirect(303, '/')
    //     }
    //     // const data = await pool.query('insert into local_trader.post (titulo, id_venta, n_control_cliente, descripcion, precio) values (?,?,?,?,?)', [titulo, generatedID, n_control_cliente, descripcion, precio])

    // } catch (error) {
    //     // res.status(500).json({
    //     //     message: "No se ha podido completar la operación"
    //     // })
    //     // res.status(500).render('signinFailed')
    //     console.log('No se ha podido cargar');
    // }
    // const data = await pool.query('insert into local_trader.venta (n_control_cliente, titulo, descripcion, cantidad, precio) values (?,?,?,?,?)', [n_control_cliente, titulo, descripcion, cantidad, precio])  
    if(req.session.userData){
        const nControl = req.session.userData.n_control_cliente
        const data = await pool.query('call addPost (?,?,?,?,?)', [titulo, generatedID, nControl, descripcion, precio])
        console.log('Articulo agregado');
        res.redirect(303, '/')
    }   
}

export const deletePost = async (req, res) => {
    const { id_venta } = req.params
    try {
        const data = await pool.query('delete from local_trader.post where id_venta = (?)', [id_venta])
        console.log('Articulo eliminado');
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}