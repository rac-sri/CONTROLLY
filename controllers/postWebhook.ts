import handleMessage from "../messengerApi/handleMesseges.ts";
import handlePostback from "../messengerApi/handlePostback.ts";
import {logInfo} from "../helpers/log.ts";

export default (req, res) => {
  let body = req.body;
  console.log(body);
  // Check the webhook event is from a Page subscription
  if (body.object === "page") {
    body.entry.forEach(function (entry) {
      // Gets the body of the webhook event
      console.log(entry);
      let webhook_event = entry.messaging[0];
      logInfo(webhook_event);
      console.log(webhook_event);

      let sender_psid = webhook_event.sender.id;
      console.log("Sender ID: " + sender_psid);
      logInfo("Sender ID: " + sender_psid);

      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
    });
    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
};
