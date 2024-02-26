import { connect } from "mongoose";
import { dbURI } from "./main.js";

export async function connection() {
  try {
    let done = await connect(dbURI);

    if (!done) {
      return console.log("something Wrong");
    }
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}
