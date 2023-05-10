import { pool } from '../dbConn.js'

export const loadProfile = async (req, res) => {
    try {
        let userData = null
        let activePage = 'nav_1' //Usar una variable extra para establecer la vista en la que estamos y poderla renderizar
        if (req.session.userData) {
            const nControl = req.session.userData.n_control
            userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
            // console.log(req.session.userData);
            // console.log(userData[0]);
        }
        // else{
        //     res.send('No existe perfil')
        // }
        res.render('profile', { userData, activePage })
    } catch (error) {
        console.log('No se pudo realizar la operacion');
    }
}

export const loadPosts = async (req, res) => {
    try {
        let activePage = 'nav_2'
        let userData = null
        if (req.session.userData) {
            const nControl = req.session.userData.n_control
            userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
            const [postsData] = await pool.query('select * from local_trader.post where n_control_cliente = (?)', [nControl])
            res.render('profile', { postsData, activePage, userData })

        }
    } catch (error) {
        console.log('No se pudo realizar la operacion');
    }
}

export const loadComments = async (req, res) => {
    let postsData = null
    let activePage = 'nav_3'
    let userData = null
    if (req.session.userData) {
        const nControl = req.session.userData.n_control
        userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
        postsData = await pool.query('select * from local_trader.post where n_control_cliente = (?)', [nControl])

    }
    res.render('profile', { postsData, activePage, userData })
}
