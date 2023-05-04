const staticRoute = { root: 'src/public' }   
import { pool } from '../dbConn.js'   

export const loadLogin = async (req, res) => {
    res.render('login')
}

export const loadAfterLogin = async (req, res) => {
    req.session.userData = req.body
    // const userLog = req.flash('user')[0]
    // console.log(req.session.userData);

    const [data] = await pool.query('select * from local_trader.usuario where n_control = (?)', [req.session.userData.n_control_cliente])
    if(data[0].pass === req.session.userData.pass){
        res.redirect('/')
    }else{
        res.render('login')
    }
    
    // res.render('feed', {userLog, data})
}

export const logout = async (req, res) => {
    delete req.session.userData
    res.redirect('/')
}