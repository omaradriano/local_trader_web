const staticRoute = { root: 'src/public' }

import {pool} from '../dbConn.js'

export const loadFeed = async (req, res) => {
    // res.sendFile('feed.html', staticRoute)
    // try {
    //     const [data] = await pool.query('select * from local_trader.usuario')
    //     // res.sendFile('feed.html', staticRoute)
    // } catch (error) {
    //     res.status(500).json({
    //         message: 'Ha ocurrido un error inesperado'
    //     })
    // }
    // const [data] = await pool.query('select * from local_trader.usuario')
    // res.render('feed', {usuarios: data})
    const [data] = await pool.query('select * from local_trader.usuario')
    // res.send(data)
    res.render('feed', {data})

}