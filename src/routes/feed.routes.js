//Configuración de rutas para archivos
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticRoute = { root: path.join(__dirname, '../public') }
import { Router } from 'express'
const router = Router()

//Controllers
import {userRegister} from '../controllers/feed.controllers.js'

router.get('/', (req, res) => {
    res.sendFile('/feed.html', staticRoute)
})
router.get('/signin', (req, res) => {
    res.sendFile('signinForm.html', staticRoute)
})
router.post('/signin', userRegister)

export default router