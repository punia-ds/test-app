import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  location: {
    type: String,
    required: true,
  },
  song: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  playing_at: {
    type: String,
  },
});

const RequestsModel = mongoose.model("Request", requestSchema);
export default RequestsModel;
