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
    "403259630437793804",
    "640224786366201856"
  ]
  
  if(!devs.includes(message.author.id)) return message.reply('no!');
  message.delete()
  message.channel.fetchMessage(args[0]).then(m => {
    m.react(args[1])
  })
}

module.exports.help = {
  name: "react"
}