const staticRoute = { root: 'src/public' }      

export const loadLogin = async (req, res) => {
    res.sendFile('login.html', staticRoute)
}