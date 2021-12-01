# Natural Language Processing

## Project Summary

Through this project, I practiced;

- Setting up the [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis) and created requests based in the form input
- Setting up Webpack
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers

## Setting up the API

The MeaningCloud API performs detailed multilingual sentiment analysis of texts. It determines the agreement, subjectivity, irony, confidence, type of a string of text inputted by the user. To set up, go to the [MeaningCloud website](https://www.meaningcloud.com/developer/create-account) and create an account.

After successfully creating an account, you can find your API key [here](https://www.meaningcloud.com/developer/account/subscriptions)

- [ ] Add the API key to the top of your server/index.js file:
```
API_KEY=**************************
```

To ensure that the API key is not declared publicly, define it in the .env file and add file to the .gitignore file using the following steps;


- [ ] Use npm or yarn to install the dotenv package `npm install dotenv`. This will allow us to use environment variables we set in a new file
- [ ] Create a new `.env` file in the root of your project
- [ ] Go to your .gitignore file and add `.env` 
- [ ] Fill the .env file with your API keys like this:

```
API_KEY=**************************
```

- [ ] Add this code to the top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
## Loaders and Plugins Installed
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
npm install --save-dev jest

## Values Returned from API 
Agreement, Subjectivity, Irony, Confidence and Sentence form (i.e setting eg restaurant)


## Deploying
This project was deployed using [Netlify](https://www.netlify.com/). To view deployed project, click [here] ()
