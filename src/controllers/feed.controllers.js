export const userRegister = async (req, res) => {
    const { n_control, nombre, telefono, email, tipo_usuario, username, pass } = req.body
    try {
        const data = await pool.query('insert into local_trader.usuario (n_control, nombre, telefono, email, tipo_usuario, username, pass) values (?,?,?,?,?,?,?)', [n_control, nombre, telefono, email, tipo_usuario, username, pass])
        res.send('Registrado con éxito')
    } catch (error) {
        res.status(500).json({
            message: "No se ha podido completar la operación"
        })
    }
}