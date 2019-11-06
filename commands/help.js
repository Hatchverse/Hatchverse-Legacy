const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  //Help message
  let embed = new Discord.RichEmbed()
  .setAuthor('Help/Commands', bot.user.displayAvatarURL)
  .addField('Eggs', '`()open <egg name>` - Opens an egg\n`()eggs` - Sends a message with every egg and its requirements')
  .addField('Inventory', '`()inventory` - Sends a message with your inventory\n`()remove <pet name | all >` - Removes a all pets or pets with a name\n`()remove single <pet name>` - Removes one pet with the name specified\n`()lock <pet name>` - Locks a certain pet so it can not be deleted!\n`()unlock <pet name>` - Unlocks a certain pet')
  .addField('Shop', '`()shop` - Sends a message with the available perks/boosts you can buy\n`()buy <perk/boost name>` - Purchases the perk/boost for the specified amount of gems **(You earn gems by Hatching Legendaries...)**')
  .addField('Trading', '`()trade <mention user> <pet name to give>` - Will ask for a pet to receive and sends a trade request to the user specified\n`()vouch <mention user>` - Adds a vouch to the mentioned user\'s profile')
  .addField('Stats/Info', '`()leaderboard <eggs | gems>` - Sends the specified leaderboard\n`()lookup <mention user>` - Sends the mentioned user\'s stats\n`()info` - Sends a message with Hatchverse and Setup info\n\nIf you run into any bugs/errors please DM `Krxnky#0001` or `Syntax#0001`.')
  .setColor('#9c13f7')
  .setFooter(bot.user.username)
  .setTimestamp()
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "help"
}