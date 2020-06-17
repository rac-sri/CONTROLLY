import {logInfo} from "../helpers/log";

export default (req, res) => {
  const VERIFY_TOKEN = "<YOUR_VERIFY_TOKEN>";

  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      logInfo("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
};
