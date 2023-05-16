import {Router} from 'express'
import {loadIndividualPost} from '../controllers/post.controllers.js'

const router = Router()

router.get('/:n_control/:id_venta', loadIndividualPost)

export default router