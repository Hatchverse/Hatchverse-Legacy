const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  const devs = [
    "3025993"
  ]
  
  if(!devs.includes(message.author.id)) return message.channel.send('brain tumor diagnosis!?');
  message.delete()
  message.channel.send(args.join(" "))
}

module.exports.help = {
  name: "say"
}