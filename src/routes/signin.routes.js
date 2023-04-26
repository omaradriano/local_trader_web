import { Router } from 'express'
const staticRoute = {root: 'src/public'}
const bootstrapRoute = {root: 'src/bootstrap'}
const stylesRoute = {root: 'src/styles'}

import {loadSigninForm, userRegister} from '../controllers/signin.controllers.js'

const router = Router()

router.get('/signin', loadSigninForm)
    .get('/bootstrap.css', (req, res) => {
        res.sendFile('bootstrap.css', bootstrapRoute)
    }).get('/bootstrap.bundle.js', (req, res) => {
        res.sendFile('bootstrap.bundle.js', bootstrapRoute)
    })

router.post('/signin', userRegister)
    .get('/bootstrap.css', (req, res) => {
        res.sendFile('bootstrap.css', bootstrapRoute)
    }).get('/bootstrap.bundle.js', (req, res) => {
        res.sendFile('bootstrap.bundle.js', bootstrapRoute)
    })

export default router