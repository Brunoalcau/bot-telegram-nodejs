import TelegramBot from 'node-telegram-bot-api';
const config = require('./config.js');
let bot = null;
console.log(config);
module.exports = () => {
  if(!bot){
    bot = new TelegramBot(config.token, {polling: true});
  }
  console.log(bot);
  return bot;
};
