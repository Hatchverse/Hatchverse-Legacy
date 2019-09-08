const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  return message.
  
  if(!args[0]) return message.channel.send('`Syntax Error:` ()leaderboard **<eggs | gems>**')
  let i = 1;
  
  if(args[0].toLowerCase() == 'eggs') {
    db.all("SELECT * FROM Users ORDER BY Eggs DESC LIMIT 10;", (err, items) => {
      console.log(items.map(item => bot.users.get(item.Tag).id))
      //Eggs embed
      let embed = new Discord.RichEmbed()
      .setAuthor('Hatchverse Leaderboard (Eggs Opened)', bot.user.displayAvatarURL)
      .setDescription(items.map(item => `\`${i++}.\` **${bot.users.get(item.Tag).username + "#" + bot.users.get(item.Tag).discriminator}** :egg: **${item.Eggs}**`))
      .setTimestamp()
      .setColor('#9c13f7')
      .setFooter(bot.user.username)

      message.channel.send(embed)
    })
  }
  
  if (args[0].toLowerCase() == 'gems') {
    db.all("SELECT * FROM Users ORDER BY Gems DESC LIMIT 10;", (err, items) => {
      //Gems embed
      let embed = new Discord.RichEmbed()
      .setAuthor('Hatchverse Leaderboard (Gems)', bot.user.displayAvatarURL)
      .setDescription(items.map(item => `\`${i++}.\` **${bot.users.get(item.Tag).username + "#" + bot.users.get(item.Tag).discriminator}** <:Gem:592857805380255745> **${item.Gems}**`))
      .setTimestamp()
      .setColor('#9c13f7')
      .setFooter(bot.user.username, bot.user.displayAvatarURL)

      message.channel.send(embed)
    })
  }
}

module.exports.help = {
  name: "leaderboarddisabled"
}