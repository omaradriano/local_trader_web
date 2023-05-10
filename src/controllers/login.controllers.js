const staticRoute = { root: 'src/public' }
import { pool } from '../dbConn.js'

export const loadLogin = async (req, res) => {
    res.render('login')
}

export const loadAfterLogin = async (req, res) => {
    req.session.userData = req.body //Captura de los datos en Login

    // const userLog = req.flash('user')[0]
    // console.log(req.session.userData);
    try {
        const [data] = await pool.query('select * from local_trader.usuario where n_control = (?)', [req.session.userData.n_control])
        // console.log(data);
        if (data.length === 0) res.render('login')
        if (data[0].pass === req.session.userData.pass) {
            res.redirect('/')
        }
    } catch (error) {
        console.log(error, 'No se ha podido encontrar usuario');
        res.render('login')
    }


    // res.render('feed', {userLog, data})
}


//Logout del usuario, eliminando su respectiva session
export const logout = async (req, res) => {
    delete req.session.userData
    res.redirect('/')
}