import dotenv from 'dotenv'
import stripe from 'stripe'
dotenv.config()

const stripeKey = stripe(process.env.STRIPE_KEY)
export const payment = async (req, res) => {
  const total = req.query.total

  console.log('Payment Request Received BOOM!!! for this amount >>>', total)

  const paymentIntent = await stripeKey.paymentIntents.create({
    amount: total,
    currency: 'inr',
  })

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
}
