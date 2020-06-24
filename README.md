## Inspiration
This project was inspired by the latest tragedy of the boys' locker room that happened in India. There was the spread of this information about a boys-only group in which the participants were body-shaming and planning hideous crimes like rape. There were two separate cases, one on Instagram and on Snapchat. The police proved that the Snapchat case was fake. But before even anything was proven, people started to spread hate speeches against the parties involved. This eventually resulted in one of the involved party to commit suicide.

## What it does
My solution aims to notify people if the text or message they are gonna put on their stories or send to someone, might cause someone a mental breakdown. This bot basically is aimed at people who are unable to analyze if the message they are sending will affect someone mentally or not and that they are not unknowingly leading someone towards a state of depression, anxiety, etc.
The bot awards the person coming to it with a potential hatred speech with an NFT token. The texts are recorded on the blockchain. The reward is claimed whenever someone gives any new potentially dangerous hatred text to the bot. This way people also get attracted to using the chatbot since they are being rewarded for it.

## Installation 
1. Setup vm instances and follw the guidlines on GCP NLP sentimental analysis and setup the require env variables.
2. Create a facebook page, setup webhooks, and add the page access token to the env variables.
3. Run ```nodemon```
4. Expose the port using ```npm run expose```

Note: 
1. Before making a kubernetes build using kompose. 
2. Docker Container not working due to problem with truffle setup inside them.

## Tech Stack
1. NodeJS
2. Facebook Messenger
3. Web3
4. Ethereum
5. Solidity
6. Google Cloud Compute Enginer
7. Google Cloud NLP models(sentimental analysis)

## Demo
[Rinkeby Test Network](https://m.me/106119301137974)

## Challenges I ran into
The few stages I got stuck were:
1. Machine Learning Model integration in my bot.
2. Designing the architecture for a bot to tackle messages in a sequential manner.
3. **Why would someone use my bot?**. The solution I came up with was NFT tokens. If people get rewarded for using a bot, then they will use it!!. So by giving them NFT token and leveling their tokens with time, this not only attracts customers, but also results in more database regarding such negatively influential texts and posts.

## Accomplishments that I'm proud of
1. Proper working backend design with proper tests for the smart contract.
2. Work Flow design of the chatbot.
3. Learning about several cloud services related to ML.
4. Quite a good understanding of interacting with ERC721 smart contracts.

## What I learned
1. Cloud features related to ML, mainly NLP.
2. Created two chatbots for following the tutorial purposes, resulting in me understanding not only making an interactive chatbot, but also a web view based bot too.
3. Running a typescript project using PM2.

## What's next for CONTROLLY
1. Integration of a Text Semantic Similarity Model for better record maintenance.
2. Adding more interaction features if needed.

## Screenshots
<p float="left">
  <img src="https://i.imgur.com/9y0DbJu.jpg" width="250" />
  <img src="https://i.imgur.com/tW0jGjT.jpg" width="250" /> 
  <img src="https://i.imgur.com/9LaHrdn.jpg" width="250" />
</p>


