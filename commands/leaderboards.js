const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const devs = [
    "302599378332549121",
    "302527751745961985",
    "198135885118570497",
    "640224786366201856"
    ]

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  if(!args[0]) return message.channel.send('`Syntax Error:` ()leaderboard **<eggs | gems>**')
  
  if(args[0].toLowerCase() == 'eggs') {
    db.all("SELECT * FROM Users ORDER BY Eggs DESC LIMIT 10;", (err, items) => {
      //Eggs embed
      let embed = new Discord.MessageEmbed()
      .setAuthor('Hatchverse Leaderboard (Eggs Opened)', bot.user.displayAvatarURL)
      .setDescription(items.map((item, i) => `\`${i+1}.\` **${bot.users.get(item.Tag.toString()).username + "#" + bot.users.get(item.Tag.toString()).discriminator}** :egg: **${item.Eggs}**`))
      .setTimestamp()
      .setColor('#9c13f7')
      .setFooter(bot.user.username)

      message.channel.send(embed)
    })
  }
  
  if (args[0].toLowerCase() == 'gems') {
    db.all("SELECT * FROM Users ORDER BY Gems DESC LIMIT 10;", (err, items) => {
      //Gems embed
      let embed = new Discord.MessageEmbed()
      .setAuthor('Hatchverse Leaderboard (Gems)', bot.user.displayAvatarURL)
      .setDescription(items.map((item, i) => `\`${i+1}.\` **${bot.users.get(item.Tag.toString()).username + "#" + bot.users.get(item.Tag.toString()).discriminator}** <:Gem:592857805380255745> **${item.Gems}**`))
      .setTimestamp()
      .setColor('#9c13f7')
      .setFooter(bot.user.username, bot.user.displayAvatarURL)

      message.channel.send(embed)
    })
  }
}

module.exports.help = {
  name: "leaderboard"
}