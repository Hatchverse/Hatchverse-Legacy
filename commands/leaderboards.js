const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if (args[0].toLowerCase() == 'gems') {
    db.all("SELECT * FROM Users ORDER BY Gems DESC;", (err, items) => {
      let i = 1;

      let embed = new Discord.RichEmbed()
      .setAuthor('Hatchverse Leaderboard (Gems)')
      .setDescription(items.map(item => `${i++}. **${bot.users.get(item.Tag).username + "#" + bot.users.get(item.Tag).discriminator}** :egg: **${item.Eggs}**`))
      .setTimestamp()
      .setFooter(bot.user.username, bot.user.displayAvatarURL)

      message.channel.send(embed)
    })
  }
  
  if(!args[0]) {
      db.all("SELECT * FROM Users ORDER BY Eggs DESC LIMIT 25;", (err, items) => {
      let i = 1;

      let embed = new Discord.RichEmbed()
      .setAuthor('Hatchverse Leaderboard (Eggs Opened)')
      .setDescription(items.map(item => `${i++}. **${bot.users.get(item.Tag).username + "#" + bot.users.get(item.Tag).discriminator}** :egg: **${item.Eggs}**`))
      .setTimestamp()
      .setFooter(bot.user.username, bot.user.displayAvatarURL)

      message.channel.send(embed)
    })
  }
}

module.exports.help = {
  name: "leaderboard"
}