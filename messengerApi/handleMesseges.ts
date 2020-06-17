import callSendAPI from "./callSendApi.ts";
import resolver from "../Functionalities/resolveMessage.ts";

function handleMessage(sender_psid, received_message) {
  let response;

  if (received_message.text) {
    /* Todo : 
      1. a function to check if the message got potencial 🔊 
      2. bases on (1) execute blockchain token transfer from the account provided next by the user.
      */

    const resolved: Boolean = resolver(received_message.text);
    if (!resolved) {
      response = `Sorry doesn't seems to be a problemtic text.`;
      callSendAPI(sender_psid, response);
    }

    response = {
      text: `You sent the message: "${received_message.text}". Now send me an attachment!`,
    };
  } else if (received_message.attachments) {
    // Get the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Is this the right picture?",
              subtitle: "Tap a button to answer.",
              image_url: attachment_url,
              buttons: [
                {
                  type: "postback",
                  title: "Yes!",
                  payload: "yes",
                },
                {
                  type: "postback",
                  title: "No!",
                  payload: "no",
                },
              ],
            },
          ],
        },
      },
    };
  }

  // Send the response message
  callSendAPI(sender_psid, response);
}

export default handleMessage;
