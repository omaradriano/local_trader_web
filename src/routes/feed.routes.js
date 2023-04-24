import express, { Router } from 'express'
const router = Router()

const staticRoute = { root: 'src/public' }
const bootstrapRoute = { root: 'src/bootstrap' }

//Controllers
import { userRegister, loadFeed, loadSigninForm } from '../controllers/feed.controllers.js'

router.get('/', loadFeed)
    .get('/bootstrap.css', (req, res) => {
        res.sendFile('bootstrap.css', bootstrapRoute)
    }).get('/bootstrap.bundle.js', (req, res) => {
        res.sendFile('bootstrap.bundle.js', bootstrapRoute)
    })
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