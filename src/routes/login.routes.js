import {Router} from 'express'
import {loadLogin, loadAfterLogin, logout} from '../controllers/login.controllers.js'

const router = Router()

router.get('/login', loadLogin)
router.post('/login', loadAfterLogin)
router.get('/logout', logout)

export default router