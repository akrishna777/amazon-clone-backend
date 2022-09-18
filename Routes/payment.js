import express from 'express'
import { payment } from '../Controllers/payment.js'

const router = express.Router()

router.post('/create-payment-intent', payment)

export default router
