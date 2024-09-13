import mongoose, { mongo } from 'mongoose';

const productScema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productImage: {
    type: String, //For URL
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, //for product owner
    ref: 'User',
  },
});

export const Product = mongoose.model('Product', productScema);
