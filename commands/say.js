const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  const devs = [
    "302599378332549121",
    "302527751745961985",
    "198135885118570497",
    "251123922005786624",
    "374756186525794305",
    "403259630437793804","553601629887397888"
  ]
  
  if(!devs.includes(message.author.id)) return message.channel.send('brain tumor diagnosis!?');
  message.delete()
  message.channel.send(args.join(" "))
}

module.exports.help = {
  name: "say"
}