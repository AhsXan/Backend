import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYear: {
      type: Number,
      default: 0,
      //required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  {timestamp:true}
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
