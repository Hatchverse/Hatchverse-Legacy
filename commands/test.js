const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  message.channel.send('gay')
}

module.exports.help = {
  name: "test"
}