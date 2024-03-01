import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tags: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "blocked", "deleted"],
    default: "active",
  },
  addedBy: {
    type: mongoose.Types.ObjectId,
    ref: "client",
  },
});

const PostModel = mongoose.model("post", postSchema);

export default PostModel;
