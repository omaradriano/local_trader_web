import { Router } from 'express'
import {testLoadProfile} from '../controllers/profile.controllers.js'

const router = Router()

router.get('/profile', testLoadProfile)


export default router