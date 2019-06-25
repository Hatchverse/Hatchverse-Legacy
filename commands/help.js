const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  let embed = new Discord.RichEmbed()
  .setAuthor('Help/Commands', bot.user.displayAvatarURL)
  .addField('Eggs', '`()open <egg name>` - Opens an egg\n`()eggs` - Sends a message with every egg and its requirements')
  .addField('Inventory', '`()inventory` - Sends a message with your inventory\n`()remove <pet name | all>` - Removes a all pets or pets with a name')
  .addField('Shop', '`()shop` - Sends a message with the available perks/boosts you can buy\n`()buy <perk/boost name>` - Purchases the perk/boost')
  .addField('Stats/Info', '`()leaderboard <eggs | gems>` - Sends the specified leaderboard\n`()lookup <mention user>` - Sends the mentioned user\'s stats\n`()info` - Sends a message with Hatchverse and Setup info\n\nIf you run into any bugs/errors please DM `Krxnky#1824` or `Syntax#1588`.')
  .setColor('#9c13f7')
  .setFooter(bot.user.username)
  .setTimestamp()
  
  message.channel.send(embed)
}

module.exports.help = {
  name: "help"
}