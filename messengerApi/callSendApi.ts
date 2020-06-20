import request from "request";
import {PAGE_ACCESS_TOKEN} from "../helpers/constants";
import {logError, logInfo} from "../helpers/log";

function callSendAPI(sender_psid, response) {
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    message: response,
  };

  console.log(response + " is to be send");
  // Send the HTTP request to the Messenger Platform
  request(
    {
      uri: "https://graph.facebook.com/v2.6/me/messages",
      qs: {access_token: PAGE_ACCESS_TOKEN},
      method: "POST",
      json: request_body,
    },
    (err, res, body) => {
      if (!err) {
        logInfo("message sent");
        console.log("message sent!");
      } else {
        logError("Unable to send Message" + err);
        console.error("Unable to send message:" + err);
      }
    }
  );
}

export default callSendAPI;
