import ApiModel from "../routes/apiHits/model.js";
import { insErr } from "../routes/errors/controller.js";
import ErrSchema from "../routes/errors/model.js";

async function sendJson(res, status, message) {
  const url =
    res.req.protocol + "://" + res.req.get("host") + res.req.originalUrl;
  let body = res.req.body;

  let response =
    typeof message == "string"
      ? message
      : Array.isArray(message)
      ? message
      : typeof message == "object" && message.message
      ? message.message
      : message;

  let api = await new ApiModel({
    url,
    method: res.req.method,
    payload: body,
    status,
    response,
  }).save();
  if (status != 200) {
    let day = new Date();
    let today = `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`;
    let nowTime = `${day.toLocaleTimeString()}`;
    let insErr = new ErrSchema({
      status,
      message: `${message?.message}`,
      date: today,
      time: nowTime,
      url,
      body,
      response: api?._id,
    });
    insErr
      .save()
      .then((resp) => "")
      .catch((err) => console.log(err));
  }

  if (body?.password) {
    body.password = "***********";
  }

  if (body.token) {
    body.token = "*************";
  }

  res.json({
    status,
    message: response,
  });
}

function sendResponse(res, status, message) {
  if (status != 200) {
    insErr(res.req, message, res.req.params || res.req.body);
  }
  return res.json({ status, message });
}

export { sendJson, sendResponse };
