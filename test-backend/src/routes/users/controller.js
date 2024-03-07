import { message } from "../../utils/message.js";
import UserModel from "./model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

async function registration(req, res) {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.json({ status: 400, message: "Please Fill All Fields" });
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return res.json({ status: 400, message: "Email Is Not Valid" });
    }

    const user = await UserModel.findOne({
      email,
    });

    if (user) return res.json({ status: 401, message: "User Already Exists" });

    // password hashing
    let pass = bcrypt.hashSync(password, 12);

    // Create a new client using the Client model
    const newClient = new UserModel({
      email,
      password: pass,
    });

    // Save the client to the database
    let result = await newClient.save();

    // auth token token

    if (!result) return res.json({ status: 400, message: message.error.wrong });
    let token = jwt.sign({ id: result._id, email }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });
    return res.json({ status: 200, message: token });
  } catch (error) {
    return universalError(res, error);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ status: 400, message: message.error.fill_all });
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return res.json({ status: 400, message: message.error.email });
    }

    const user = await UserModel.findOne({
      email,
    });

    if (!user) return res.json({ status: 400, message: message.error.found });

    let isValidPass = await bcrypt.compare(password, user.password);
    if (!isValidPass)
      return res.json({ status: 400, message: message.error.found });

    let token = jwt.sign({ id: user._id, email }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    return res.json({ status: 200, message: token });
  } catch (error) {
    universalError(res, error);
  }
}
const authToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.json({ status: 400, message: message.error.fill_all });
  }

  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    // 4893j-fd42-fdfd432-fde4r

    const date = Math.round(Date.now() / 1000);

    if (date >= decoded.exp) {
      return res.json({ status: 400, message: message.error.login });
    }
    // Pass the decoded payload to the next middleware or route handler

    const { id } = decoded;

    const user = await UserModel.findById({ _id: id }).select("-password");

    if (!user) return res.json({ status: 400, message: message.error.found });

    return res.json({
      status: 200,
      message: user,
    });
  } catch (error) {
    return res.json({ status: 500, message: error.message });
  }
};

function universalError(res, error) {
  return res.json({ status: 500, message: error.message });
}

const User = { registration, login, authToken };
export default User;
