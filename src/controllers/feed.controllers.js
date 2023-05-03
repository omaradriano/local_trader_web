const staticRoute = { root: 'src/public' }

import { pool } from '../dbConn.js'
//generador de Id de post
import {uuid} from 'uuidv4'

export const loadFeed = async (req, res) => {
    // res.sendFile('feed.html', staticRoute)
    // try {
    //     const [data] = await pool.query('select * from local_trader.usuario')
    //     // res.sendFile('feed.html', staticRoute)
    // } catch (error) {
    //     res.status(500).json({
    //         message: 'Ha ocurrido un error inesperado'
    //     })
    // }
    // const [data] = await pool.query('select * from local_trader.usuario')
    // res.render('feed', {usuarios: data})
    const [data] = await pool.query('select * from local_trader.post')
    // res.send(data)
    res.render('feed', { data })

}

export const addPost = async (req, res) => {
    const { n_control_cliente, titulo, descripcion, precio } = req.body
    const generatedID = await uuid()
    try {
        // const data = await pool.query('insert into local_trader.post (titulo, id_venta, n_control_cliente, descripcion, precio) values (?,?,?,?,?)', [titulo, generatedID, n_control_cliente, descripcion, precio])
        const data = await pool.query('call addPost (?,?,?,?,?)', [titulo, generatedID, n_control_cliente, descripcion, precio])
        console.log('Articulo agregado');
        res.redirect(303, '/')
    } catch (error) {
        // res.status(500).json({
        //     message: "No se ha podido completar la operación"
        // })
        // res.status(500).render('signinFailed')
        console.log('No se ha podido cargar');
    }
    // const data = await pool.query('insert into local_trader.venta (n_control_cliente, titulo, descripcion, cantidad, precio) values (?,?,?,?,?)', [n_control_cliente, titulo, descripcion, cantidad, precio])     
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