import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
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
    status: {
      type: String,
      enum: ["active", "pending", "deleted"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const TeamModel = mongoose.model("team", teamSchema);

export default TeamModel;
