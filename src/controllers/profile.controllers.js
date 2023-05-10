import {pool} from '../dbConn.js'

export const loadProfile = async (req, res) => {
    let userData = null
    let activePage = 'nav_1' //Usar una variable extra para establecer la vista en la que estamos y poderla renderizar
    if(req.session.userData){
        const nControl = req.session.userData.n_control
        userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
        // console.log(req.session.userData);
        // console.log(userData[0]);
    }
    // else{
    //     res.send('No existe perfil')
    // }
    res.render('profile', {userData, activePage})
}

// export const loadPosts = async (req, res) => {
//     let userData = null
//     let activePage = 'nav_2'
//     // let pageOptions = {
//     //     activePage: 'nav_1'
//     // }
//     if(req.session.userData){
//         // const userData = req.session.userData
//         const nControl = req.session.userData.n_control_cliente
//         userData = await pool.query('select * from local_trader.usuario where n_control = (?)', [nControl])
//         // console.log(req.session.userData);
//         // console.log(userData[0]);
//     }
//     // else{
//     //     res.send('No existe perfil')
//     // }
//     res.render('profile', {userData, activePage})
// }
