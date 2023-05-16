import { normalizeArray } from 'discord.js'
import { pool } from '../dbConn.js'

export const loadProfile = async (req, res) => {
    let state = null
    if(req.session.userData){
        state = true
    }else{
        state = false
    }
    try {
        let userData = null
        let activePage = 'nav_1' //Usar una variable extra para establecer la vista en la que estamos y poderla renderizar
        if (req.session.userData) {
            const nControl = req.session.userData.n_control
            if (req.session.userData.n_control === req.params.n_control) {
                userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
            } else {
                userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [req.params.n_control])
            }
        } else {
            userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [req.params.n_control])
        }
        res.render('profile', { userData, activePage, state })
    } catch (error) {
        console.log('No se ha podido realizar la operacion | Error en profile.controllers/loadProfile');
    }
}

export const loadPosts = async (req, res) => {
    let state = null
    if(req.session.userData){
        state = true
    }else{
        state = false
    }
    try {
        let activePage = 'nav_2'
        let userData = null
        let n_control = null
        //Pendiente la carga de las publicaciones
        if (req.session.userData) {
            if (req.session.userDatan_control === req.params.n_control) {
                n_control = req.params.n_control
            } else {
                n_control = req.params.n_control
            }
        } else {
            n_control = req.params.n_control
        }
        userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [n_control])
        const [postsData] = await pool.query('select * from local_trader.post where n_control_cliente = (?)', [n_control])
        res.render('profile', { postsData, activePage, userData, state })
    } catch (error) {
        console.log('No se ha podido realizar la operacion | Error en profile.controllers/loadPosts');
    }
}

export const loadComments = async (req, res) => {
    //La seccion de comentarios aun no esta habilitada
    let state = null
    if(req.session.userData){
        state = true
    }else{
        state = false
    }
    try {
        let postsData = null
        let activePage = 'nav_3'
        let userData = null
        if (req.session.userData) {
            const nControl = req.session.userData.n_control
            userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
            postsData = await pool.query('select * from local_trader.post where n_control_cliente = (?)', [nControl])

        }
        res.render('profile', { postsData, activePage, userData })
    } catch (error) {
        console.log('No se ha podido realizar la operacion | Error en profile.controllers/loadComments');
    }
}
