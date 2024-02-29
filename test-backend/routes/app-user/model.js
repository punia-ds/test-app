import mongoose from "mongoose";

const appUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "pending", "deleted"],
      default: "pending",
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
  { timestamps: true }
);

const AppUserModel = mongoose.model("client", appUserSchema);

export default AppUserModel;
