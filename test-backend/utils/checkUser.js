import { universalError } from "./catchError.js";
import UserModel from "../routes/users/model.js";
import { sendJson } from "./response.js";
import { message } from "./message.js";

async function checkByUser(user) {
  try {
    let userDetails = await UserModel.findOne({ _id: user });
    if (userDetails.totalCustomCreated == userDetails.planDetail) {
      return sendJson(res, 401, message.user.exceed);
    }
    return true;
  } catch (error) {
    universalError(res, error);
  }
}

export { checkByUser };
