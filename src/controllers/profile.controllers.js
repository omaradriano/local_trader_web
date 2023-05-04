import {pool} from '../dbConn.js'

export const testLoadProfile = async (req, res) => {
    let userData = null
    if(req.session.userData){
        // const userData = req.session.userData
        const nControl = req.session.userData.n_control_cliente
        userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
        // console.log(req.session.userData);
        // console.log(userData[0]);
    }else{
        res.send('No existe perfil')
    }
    res.render('profile', {userData})
}