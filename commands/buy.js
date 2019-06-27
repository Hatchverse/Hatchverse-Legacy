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
    //DB consts
    const gems = parseInt(items[0].Gems);
    const perks = items[0].Perks;
    
    //Double Egg
    if(args.join(" ").toLowerCase() == 'double egg') {
      //If statements
      if(perks == 'd' || perks == "t") return message.channel.send('You already own **Double Egg** perk!');
      if(gems < 1000) return message.channel.send(`Not enough **Gems** <:Gem:592857805380255745>! You need **${1000 - gems}** more!`);
      
      let embed = new Discord.RichEmbed()
      .setAuthor('Buy', bot.user.displayAvatarURL)
      .setDescription('Are you sure you want to buy **Double Egg** for <:Gem:592857805380255745> **1000**?')
      .setThumbnail('https://i.imgur.com/qpb0uIj.png')
      .setFooter('React with ✅ or ❌')
      .setTimestamp()
      
      const chat = message;
      //Reactions Filter
      const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
      }
      
      message.channel.send(embed).then((message) => {
        //React to the message
        message.react("✅")
        message.react("❌")
        //Await the reactions
        message.awaitReactions(filter, {max: 1, time: 10000, errors: ['time'] }).then(collected => {
          const reaction = collected.first();
          
          if (reaction.emoji.name == "✅") {
            db.run("UPDATE Users SET Perks = ? WHERE Tag = ?", 'd', chat.author.id)
            db.run("UPDATE Users SET Gems = ? WHERE Tag = ?", gems - 1000, chat.author.id)
            message.channel.send('Successfully bought **Double Egg** perk!')
          } else {
            return;
          }
        }).catch(err => message.delete())
      })
    }

    //Triple Egg
    if(args.join(" ").toLowerCase() == 'triple egg') {
      //If statements
      if(perks == 't') return message.channel.send('You already own **Triple Egg** perk!');
      if(gems < 10000) return message.channel.send(`Not enough **Gems** <:Gem:592857805380255745>! You need **${10000 - gems}** more!`);
      
      let embed = new Discord.RichEmbed()
      .setAuthor('Buy', bot.user.displayAvatarURL)
      .setDescription('Are you sure you want to buy **Triple Egg** for <:Gem:592857805380255745> **10000**?')
      .setThumbnail("https://i.imgur.com/peud2fR.png")
      .setFooter('React with ✅ or ❌')
      .setTimestamp()
      
      const chat = message;
      //Reactions Filter
      const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
      }
      
      message.channel.send(embed).then((message) => {
        //React to the message
        message.react("✅")
        message.react("❌")
        //Await the reactions
        message.awaitReactions(filter, {max: 1, time: 10000, errors: ['time'] }).then(collected => {
          const reaction = collected.first();
          
          if (reaction.emoji.name == "✅") {
            db.run("UPDATE Users SET Perks = ? WHERE Tag = ?", 't', chat.author.id)
            db.run("UPDATE Users SET Gems = ? WHERE Tag = ?", gems - 10000, chat.author.id)
            message.channel.send('Successfully bought **Triple Egg** perk!')
          } else {
            return;
          }
        }).catch(err => message.delete())
      })
    }
    
    
    
    
  })
}

module.exports.help = {
  name: "buy"
}