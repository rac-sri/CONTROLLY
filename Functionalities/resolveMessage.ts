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
  if (sentiment.score <= -0.6 && sentiment.magnitude > 0.5) return true;
  else return false;
}

export default resolver;
