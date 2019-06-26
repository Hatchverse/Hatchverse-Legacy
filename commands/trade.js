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
  .setAuthor('Trade Request', message.author.displayAvatarURL)
  .setDescription(`Incoming Trade Request from \`${message.author.tag}\``)
  .addField('You give', '<:Rainbow_Dogcat:592426717285449788>', true)
  .addField('You receive', '<:Blurple_Doggy:591827146649894913>', true)
  .setColor('#9c13f7')
  .setFooter(bot.user.username)
  .setTimestamp()
  
  message.channel.send(incomingtrade)
  
  let senttraderequest
}

module.exports.help = {
  name: "trade"
}