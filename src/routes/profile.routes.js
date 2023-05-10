import { Router } from 'express'
import {loadProfile, loadPosts, loadComments} from '../controllers/profile.controllers.js'

const router = Router()

router.get('/:n_control', loadProfile)
router.get('/:n_control/posts', loadPosts)
router.get('/:n_control/comments', loadComments)

export default router