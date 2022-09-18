import express from 'express'
import { getOrders, postOrders } from '../Controllers/orders.js'

const router = express.Router()

router.post('/getOrders', getOrders)
router.post('/postOrders', postOrders)

export default router
