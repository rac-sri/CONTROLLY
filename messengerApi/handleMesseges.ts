import callSendAPI from "./callSendApi";
import resolver from "../Functionalities/resolveMessage";
import {checkAccount, mint, Awarduser} from "../ethereum/MintingAndAwarding";
import loadBlockchainData from "../ethereum/web3";

const obj = {};

async function handleMessage(
  sender_psid: string,
  received_message: any
): Promise<any> {
  const {contract, totalSupply, accounts} = await loadBlockchainData();

  let response: any;

  if (received_message.text) {
    /* Todo : 
      1. a function to check if the message got potencial 🔊 
      */
    const resolved: Boolean = resolver(received_message.text);
    if (!resolved) {
      console.log("not resolved");
      response = {text: `Sorry doesn't seems to be a problemtic text.`};
      callSendAPI(sender_psid, response);
      return;
    }

    let value = obj[sender_psid];

    if (value) {
      const message: string = received_message.text.trim();
      const match = message.match(/address/) && message.startsWith("address");
      if (match) {
        const address = message.substr(7).trim();
        const accountAvailaible = await checkAccount(address, contract);

        if (!accountAvailaible) {
          response = {
            text: `Hurray!!!. You just got awarded with a "CON" coin.\n"0x892da0bAec9263D47B46F550bAf5EC54cBF757ad" is the address of the contract that you can use to view your token in your wallet.`,
          };
          await mint(obj[sender_psid].text, address, contract, accounts);
          callSendAPI(sender_psid, response);
        } else {
          response = {
            text: `Hurray!!!. Your CON token just leveled up. Congratulation!!!!.\n. "0x892da0bAec9263D47B46F550bAf5EC54cBF757ad" is the address of the contract that you can use to view your token in your wallet.`,
          };
          await Awarduser(response, address, contract, accounts);
          callSendAPI(sender_psid, response);
        }
      }
    }
    //else {
    //     response = {
    //       text: `Hurray!!!. You are eligible for a NFT token. Please send me your public wallet address to claim your award.\naddress <Your_Public_Key>`,
    //     };
    //     obj[sender_psid] = {text: received_message.text};
    //   }
    // } else if (received_message.attachments) {
    //   // Get the URL of the message attachment
    //   let attachment_url = received_message.attachments[0].payload.url;
    //   response = {
    //     attachment: {
    //       type: "template",
    //       payload: {
    //         template_type: "generic",
    //         elements: [
    //           {
    //             title: "Is this the right picture?",
    //             subtitle: "Tap a button to answer.",
    //             image_url: attachment_url,
    //             buttons: [
    //               {
    //                 type: "postback",
    //                 title: "Yes!",
    //                 payload: "yes",
    //               },
    //               {
    //                 type: "postback",
    //                 title: "No!",
    //                 payload: "no",
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     },
    // };
  }

  // Send the response message
  callSendAPI(sender_psid, response);
}

export default handleMessage;
