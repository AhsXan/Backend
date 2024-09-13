import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
});

//2

const orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number,
    default: 0,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  orderItems: {
    type: [orderItemSchema],
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Cancelled', 'Deliverd'], //only options
    default: 'Pending',
  },
});

export const Order = mongoose.model('Order', orderSchema);
