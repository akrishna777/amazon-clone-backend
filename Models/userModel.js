import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
  paymentIntentId: String,
  cart: Object,
  amount: Number,
  created: Number,
})

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: Number },
  email: { type: String, required: true },
  password: { type: String, required: true },
  orders: {
    type: [orderSchema],
  },
})

export default mongoose.model('User', userSchema)
