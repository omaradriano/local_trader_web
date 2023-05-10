import { pool } from '../dbConn.js'
//Archivos estáticos
const staticRoute = { root: 'src/public' }
const bootstrapRoute = { root: 'src/bootstrap' }

export const userRegister = async (req, res) => {
    const { n_control, nombre, telefono, email, tipo_usuario, username, pass } = req.body
    try {
        const data = await pool.query('call addUsuario(?,?,?,?,?,?,?)', [n_control, nombre, telefono, email, tipo_usuario, username, pass])
        console.log('Articulo agregado');
        res.render('signupSuccess')
    } catch (error) {
        res.status(500).json({
            message: "No se ha podido agregar al usuario"
        })
        res.status(500).render('signinFailed')
    }
}

//Unicamente sirve para renderizar la vista para registrarse
export const loadSignUpForm = (req, res) => {
    res.render('signupForm')
}
