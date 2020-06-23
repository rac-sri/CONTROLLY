const language = require("@google-cloud/language");

// Instantiates a client
const client = new language.LanguageServiceClient();

async function resolver(text: string) {
  const document = {
    content: text,
    type: "PLAIN_TEXT",
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document});
  const sentiment = result.documentSentiment;
  console.log(sentiment);
  if (sentiment.score <= -0.4 && sentiment.magnitude > 0.4) return true;
  else return false;
}

export default resolver;
