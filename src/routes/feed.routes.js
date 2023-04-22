//Configuración de rutas para archivos
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticRoute = { root: path.join(__dirname, '../public') }
const bootstrapRoute = { root: path.join(__dirname, '../bootstrap') }
console.log(__dirname);
console.log(bootstrapRoute);
// const staticStyles = { root: path.join(__dirname, '../src/public') }
import express,{ Router } from 'express'
const router = Router()

//Controllers
import { userRegister } from '../controllers/feed.controllers.js'

//Feed
router.get('/', (req, res) => {
    res.sendFile('/feed.html', staticRoute)
}).get('/bootstrap.css', (req, res) => {
    res.sendFile('/bootstrap.css', bootstrapRoute)
}).get('/bootstrap.bundle.js', (req, res) => {
    res.sendFile('/bootstrap.bundle.js', bootstrapRoute)
})

router.get('/signin', (req, res) => {
    res.sendFile('signinForm.html', staticRoute)
}).get('/bootstrap.css', (req, res) => {
    res.sendFile('/bootstrap.css', bootstrapRoute)
}).get('/bootstrap.bundle.js', (req, res) => {
    res.sendFile('/bootstrap.bundle.js', bootstrapRoute)
})
router.post('/signin', userRegister)


export default router