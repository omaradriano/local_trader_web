import {Router} from 'express'
import {loadLogin} from '../controllers/login.controllers.js'

const router = Router()

router.get('/login', loadLogin)

export default router