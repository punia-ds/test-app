import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "pending", "deleted"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const CatModel = mongoose.model("category", categorySchema);

export default CatModel;
