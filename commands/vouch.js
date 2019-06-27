const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  //If statments
  if(!message.mentions.users.first()) return message.channel.send('Please mention a **user** to vouch!');
  if(message.mentions.users.first().id == message.author.id) return message.channel.send("You can not vouch **yourself**!");

  //Mention
  const mentions = message.mentions.users.first();
  
  //DB
  db.all(`SELECT * FROM Users WHERE Tag = ${mentions.id}`, (err, items) => {
    db.all(`SELECT * FROM Users WHERE Tag = ${message.author.id}`, (err, items) => {
      //If eggs is less than 50 return
      if(items[0].Eggs < 50) return message.channel.send('You need to have **50** eggs opened to vouch a user!');
      
      const vouches = items[0].Vouches;
      const vouchesSplit = items[0].Vouches.split(', ');
      
      //If already vouched return
      if(vouchesSplit.includes(message.author.id)) return message.channel.send(`You have already vouched **${mentions.tag}**!`);

      let newVouch = message.author.id;
      if(vouches.length > 0) {
        newVouch = `${vouches}, ${message.author.id}`
      }

      db.run(`UPDATE Users SET Vouches = '${newVouch}' WHERE Tag = '${mentions.id}'`);
      message.channel.send(`Succesfully vouched **${mentions.tag}!**`);
    })
  })
}

module.exports.help = {
  name: "vouch"
}