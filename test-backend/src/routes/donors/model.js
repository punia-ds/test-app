import mongoose from "mongoose";

const donorSchema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
    area: {
      type: String,
      required: true,
    },
    b_group: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    getTime: {
      type: Number,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DonorModel = mongoose.model("donor", donorSchema);
export default DonorModel;
