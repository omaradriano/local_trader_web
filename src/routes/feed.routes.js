//Configuración de rutas para archivos
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticRoute = { root: path.join(__dirname, '../public') }
// const staticStyles = { root: path.join(__dirname, '../src/public') }
import { Router } from 'express'
const router = Router()

//Controllers
import { userRegister } from '../controllers/feed.controllers.js'

//Feed
router.get('/', (req, res) => {
    res.sendFile('/feed.html', staticRoute)
}).get('/feed.css', (req, res) => {
    res.sendFile('/feed.css', staticRoute)
})

router.get('/signin', (req, res) => {
    res.sendFile('signinForm.html', staticRoute)
}).get('/signinForm.css', (req, res) => {
    res.sendFile('/signinForm.css', staticRoute)
})
router.post('/signin', userRegister)


export default router