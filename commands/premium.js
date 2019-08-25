const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  const devs = [
    "302599378332549121",
    "302527751745961985",
    "198135885118570497",
    "251123922005786624",
    "374756186525794305"
  ]
  
  if(!devs.includes(message.author.id)) return message.reply('You cannot add servers to the premium list!');
  message.channel.send("**Congratulations!** Your server has just been gifted with premium! \n What does that mean? It means you get these features: \n ||-|| `Earlier Updates` \n ||-|| `Faster Connection` \n ||-|| `and much more!`")
}

module.exports.help = {
  name: "premium"
}