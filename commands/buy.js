const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    const gems = parseInt(items[0].Gems);
    
    if(args.join(" ").toLowerCase() == 'double egg') {
      if(gems < 1000) return message.channel.send(`Not enough Gems <:Gem:592857805380255745>! `);
      let embed = new Discord.RichEmbed()
      .setAuthor('Buy', bot.user.displayAvatarURL)
      .setDescription('Are you sure you want to buy **Double Egg** for <:Gem:592857805380255745> **1000**?')
      .setThumbnail('https://i.imgur.com/qpb0uIj.png')
      .setFooter('React with ✅ or ❌')
      .setTimestamp()

      message.channel.send(embed)
    }

    if(args.join(" ").toLowerCase() == 'triple egg') {
      let embed = new Discord.RichEmbed()
      .setAuthor('Buy', bot.user.displayAvatarURL)
      .setDescription('Are you sure you want to buy **Triple Egg** for <:Gem:592857805380255745> **2000**?')
      .setThumbnail("https://i.imgur.com/peud2fR.png")
      .setFooter('React with ✅ or ❌')
      .setTimestamp()

      message.channel.send(embed)
    }
  });
}

module.exports.help = {
  name: "buy"
}