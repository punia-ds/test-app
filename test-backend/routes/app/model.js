import mongoose from "mongoose";

const appSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    appName: {
      type: String,
      required: true,
      unique: true,
    },
    bannerAds: {
      type: Boolean,
      default: false,
    },
    interAds: {
      type: Boolean,
      default: false,
    },
    rewardAds: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const AppModel = mongoose.model("app", appSchema);
export default AppModel;
