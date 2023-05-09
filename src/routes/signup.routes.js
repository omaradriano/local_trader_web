import { Router } from 'express'
const staticRoute = { root: 'src/public' }
const bootstrapRoute = { root: 'src/bootstrap' }
const stylesRoute = { root: 'src/styles' }

import { loadSignUpForm, userRegister } from '../controllers/signup.controllers.js'

const router = Router()

router.get('/signup', loadSignUpForm)
    .get('/bootstrap.css', (req, res) => {
        res.sendFile('bootstrap.css', bootstrapRoute)
    }).get('/bootstrap.bundle.js', (req, res) => {
        res.sendFile('bootstrap.bundle.js', bootstrapRoute)
    })
router.post('/signup', userRegister)
export default router