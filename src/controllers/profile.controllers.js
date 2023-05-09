import {pool} from '../dbConn.js'

export const loadProfile = async (req, res) => {
    let userData = null
    if(req.session.userData){
        // const userData = req.session.userData
        const nControl = req.session.userData.n_control_cliente
        userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
        // console.log(req.session.userData);
        // console.log(userData[0]);
    }
    // else{
    //     res.send('No existe perfil')
    // }
    res.render('profile', {userData})
}

// export const loadProfile = async (req, res) => {
//     const n_control = req.params.n_control
//     const [userData] = await pool.query('select * from local_trader.usuario where n_control = (?)', [n_control])
//     res.send(...userData)
// }

export const loadComments = async (req, res) => {
    
}

// export const loadPosts = async (req, res) => {
//     let userData = null
//     let userPosts = null
//     if(req.session.userData){
//         // const userData = req.session.userData
//         const nControl = req.session.userData.n_control_cliente
//         userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
//         userPosts = await pool.query('select * from local_trader.post where n_control_cliente = (?)', [nControl])
//         // console.log(req.session.userData);
//         // console.log(userData[0]);
//     }
//     // else{
//     //     res.send('No existe perfil')
//     // }
//     res.render('profilePosts', {userData, userPosts})
// }