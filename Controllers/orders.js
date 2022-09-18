import { ObjectId } from 'mongodb'
import User from '../Models/userModel.js'

export const getOrders = async (req, res) => {
  const userId = req.body.uid
  console.log(req.body)
  console.log(userId)

  try {
    const orders = await User.aggregate([
      {
        $match: {
          _id: ObjectId(userId),
        },
      },
      {
        $unwind: '$orders',
      },
      {
        $sort: {
          'orders.created': -1,
        },
      },
      { $limit: 1 },
      {
        $group: {
          _id: '$_id',
          orders: {
            $push: '$orders',
          },
        },
      },
    ])

    res.status(200).json(orders)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const postOrders = async (req, res) => {
  console.log(req.body)
  const userId = req.body.userId
  const paymentIntentId = req.body.paymentIntentId
  const cart = req.body.cart
  const amount = req.body.amount
  const created = req.body.created

  try {
    const user = await User.updateOne(
      { _id: ObjectId(userId) },
      {
        $push: {
          orders: [
            {
              paymentIntentId: paymentIntentId,
              cart: cart,
              amount: amount,
              created: created,
            },
          ],
        },
      },
    )
    res.status(200).json(user)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
