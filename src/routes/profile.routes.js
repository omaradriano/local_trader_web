import { Router } from 'express'
import {loadProfile} from '../controllers/profile.controllers.js'

const router = Router()

// router.get('/profile', testLoadProfile)
router.get('/:n_control', loadProfile)
// router.get('/:n_control/posts', loadPosts)
// router.get('/:n_control/comments', loadComments)

export default router