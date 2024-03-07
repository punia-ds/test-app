import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "resolved", "deleted"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const ContactModel = mongoose.model("contact", contactSchema);

export default ContactModel;
