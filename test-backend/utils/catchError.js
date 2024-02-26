import { sendJson } from "./response.js";

function universalError(res, message) {
  return sendJson(res, 500, message);
}

export { universalError };
