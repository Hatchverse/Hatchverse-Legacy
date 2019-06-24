const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  var type = args[0].toLowerCase()
  if (type == "gems" || type ==  "gem" || type ==  "money" || type ==  "$") {
    db.all("SELECT * FROM Users ORDER BY Gems DESC;", (err, items) => {
      console.log((items))
    })
  } else {
    db.all("SELECT * FROM Users ORDER BY Eggs DESC LIMIT 25;", (err, items) => {
      let i = 1;
      
      let embed = new Discord.RichEmbed()
      .setAuthor('Hatchverse Leaderboard (Eggs Opened)')
      .setDescription(items.map(item => `${i++}. ${bot.fetchUser(item.Tag)} <:Beginner_Egg:592440252979871745> ${item.Eggs}`))
      .setTimestamp()
      .setFooter(bot.user.username, bot.user.displayAvatarURL)
      
      message.channel.send(embed)
    })
  }

}

module.exports.help = {
  name: "leaderboard"
}