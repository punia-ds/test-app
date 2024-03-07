// Import the required modules using ESM syntax
import mongoose from "mongoose";

// Define the client schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the Client model
const UserModel = mongoose.model("user", userSchema);

// Export the model
export default UserModel;
