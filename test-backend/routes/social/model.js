import mongoose from "mongoose";

const socialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    mobileIcon: {
      type: String,
      required: true,
    },
    webIcon: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "pending", "deleted"],
      default: "active",
    },
  },
  { timestamps: true }
);

const SocialModel = mongoose.model("social", socialSchema);

export default SocialModel;
