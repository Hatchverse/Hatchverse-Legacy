const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  let incomingtrade = new Discord.RichEmbed()
  .setAuthor('Trade Request', bot.user.displayAvatarURL)
  .setDescription(`Trade request from ${message.author}`)
  .addField('Wants', 'Rainbow Dogcat')
  .adField('For', 'Poop')
  .setColor('#9c13f7')
  .setFooter(bot.user.username)
  .setTimestamp()
  
  message.channel.send(incomingtrade)
}

module.exports.help = {
  name: "trade"
}