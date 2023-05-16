import { pool } from '../dbConn.js'

export const loadIndividualPost = async (req, res) => {
    let state = null
    if(req.session.userData){
        state = true
    }else{
        state = false
    }
    const reqInfo = req.params
    const [auxUserData] = await pool.query('select * from local_trader.usuario where n_control = (?)', [reqInfo.n_control])
    const userData = auxUserData[0]
    const [auxPostData] = await pool.query('select * from local_trader.post where n_control_cliente = (?) and id_venta = (?)', [reqInfo.n_control, reqInfo.id_venta])
    const postData = auxPostData[0]
    // console.log(postData);
    res.render('individualPost', { postData, userData, state })

}