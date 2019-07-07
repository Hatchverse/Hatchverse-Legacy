const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  //Info message
  let embed = new Discord.RichEmbed()
  .setAuthor('Info', bot.user.displayAvatarURL) //aaa noima add it to the descript
  .setDescription('Hatchverse is a unique bot with an ability to open virtual eggs for pets that can be traded with a trade system or managed with an inventory system. You can also buy perks and boosts from the shop to help you on your egg opening adventure. Inspired by Rumble Studios Bubble Gum Simulator.')
  .addField('Setup', 'To begin your egg opening journey, simply open the Beginner Egg. To do so use the open command with the egg name as `Beginner Egg`, ex. `()open Beginner Egg`')
  .addField('Developers', '@Krxnky#0001, @Epoch#1558, @Jullian#0001, @Syntax#1588, @Exists#9999')
  .addField('Credits', `Credits to Rumble Studios for pet/egg images`)
  .addField('Changelog', '```7/3/19\n[!] - New Lock Feature\n[*] - Tons of balancing\n[*] - Added 2 new eggs (Golden Egg & Dominus Egg)```')
  .setColor('#9c13f7')
  .setFooter(bot.user.username)
  .setTimestamp()
  
  message.channel.send(embed)
}

module.exports.help = {
  name: "info"
}