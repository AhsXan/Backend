import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    //  username  : String
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: [true, 'Password is Required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
