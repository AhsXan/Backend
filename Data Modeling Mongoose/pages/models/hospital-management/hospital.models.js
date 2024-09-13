import mongoose from 'mongoose';

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adressLine1: {
      type: String,
      required: true,
    },
    adressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    specailizedIn: [
      {
        type: String,
      },
    ],
  },
  {
    timestamp: true,
  }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
