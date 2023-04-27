import { pool } from '../dbConn.js'
//Archivos estáticos
const staticRoute = { root: 'src/public' }
const bootstrapRoute = { root: 'src/bootstrap' }

export const userRegister = async (req, res) => {
    const { n_control, nombre, telefono, email, tipo_usuario, username, pass } = req.body
    try {
        const data = await pool.query('insert into local_trader.usuario (n_control, nombre, telefono, email, tipo_usuario, username, pass) values (?,?,?,?,?,?,?)', [n_control, nombre, telefono, email, tipo_usuario, username, pass])
        res.render('signinSuccess')
    } catch (error) {
        // res.status(500).json({
        //     message: "No se ha podido completar la operación"
        // })
        res.status(500).render('signinFailed')
    }
}

export const loadSigninForm = (req, res) => {
    res.render('signinForm')
}
