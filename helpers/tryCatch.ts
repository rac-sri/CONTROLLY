import callSendAPI from "messengerApi/callSendApi";

// refactoring hanglemessage

const func = (sender_psid, response) => {
  try {
    callSendAPI(sender_psid, response);
  } catch (e) {
    response = {
      text: `Something doesn't seems right.`,
    };
    callSendAPI(sender_psid, response);
  }
};

export default func;
