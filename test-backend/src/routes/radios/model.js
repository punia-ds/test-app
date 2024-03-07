import mongoose from "mongoose";

const radioSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    description: {
      type: String,
      required: true,
    },
    fb: {
      type: String,
      required: false, // Assuming social links are optional, adjust as necessary
    },
    insta: {
      type: String,
      required: false,
    },
    twitter: {
      type: String,
      required: false,
    },
    head: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    meta: {
      type: String,
      required: false, // Assuming meta is optional, adjust as necessary
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: false,
    },
    youtube: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
); // This option adds createdAt and updatedAt fields

const RadioModel = mongoose.model("radio", radioSchema);
export default RadioModel;
