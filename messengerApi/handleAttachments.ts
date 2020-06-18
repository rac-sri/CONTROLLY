// sample code for handlemessages.ts if response.attachment is true
//else if (received_message.attachments) {
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
