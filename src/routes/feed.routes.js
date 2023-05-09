import express, { Router } from 'express'
const router = Router()

const staticRoute = { root: 'src/public' }
const bootstrapRoute = { root: 'src/bootstrap' }
const stylesRoute = { root: 'src/styles' }

//Controllers
import { loadFeed, addPost, deletePost } from '../controllers/feed.controllers.js'

router.get('/', loadFeed)
    .get('/feed.css', (req, res) => {
        res.sendFile('feed.css', stylesRoute)
    })

router.post('/', addPost)

router.get('/delete/:id_venta', deletePost)

router.get('/test', (req, res) => {
    res.render('test')
})

export default router