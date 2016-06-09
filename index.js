import TelegramBot from 'node-telegram-bot-api';
import consign from 'consign';

consign()
.include('bot.js')
.then('bots');
