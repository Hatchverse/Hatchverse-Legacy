const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(!message.mentions.users.first()) return message.channel.send(`Please mention a **user**!`);
  let userid = message.mentions.users.first().id;
  
  db.all(`SELECT * FROM Users WHERE Tag = ${userid}`, (err, items) => {
    if (items.length == 0) return message.channel.send(`${message.mentions.users.first()} has no **stats**!`);
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.mentions.users.first().username}'s Stats`, message.mentions.users.first().displayAvatarURL)
    .addField('Eggs Opened', `:egg: ${items[0].Eggs}`, true)
    .addField('Gems', `:Gem: ${items[0].Gems}`, true)
    .addField('Pets', `:egg: ${items[0].Eggs}`, true)
    .setFooter(bot.user.username)
    .setTimestamp()
    
    message.channel.send(embed)
  })
}

module.exports.help = {
  name: "lookup"
}