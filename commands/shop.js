const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  //Shop embed
  let embed = new Discord.RichEmbed()
  .setAuthor('Shop', bot.user.displayAvatarURL)
  .addField('Perks', `<:2xegg:592877627543388170> Double Egg - <:Gem:592857805380255745> **1000**\n<:3xegg:592878254654881802> Triple Egg - <:Gem:592857805380255745> **10000**`, true)
  .addBlankField(true)
  .setColor('#9c13f7')
  .addField('Boosts', `*Coming soon...*`, true)
  .setFooter("Use ()buy <Item Name> to purchase a boost/perk")
  .setTimestamp()
  
  message.channel.send(embed)
}

module.exports.help = {
  name: "shop"
}