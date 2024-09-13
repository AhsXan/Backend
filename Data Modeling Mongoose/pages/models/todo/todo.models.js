import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const todo = new mongoose.Schema(
  {
    content: {
      type: String,
      requried: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', //model names
    },
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], //array of sub todos
  },
  { timestamps: true }
);

export const todo = mongoose.model('Todo', todo);
