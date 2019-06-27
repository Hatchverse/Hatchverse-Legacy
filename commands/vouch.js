const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(!message.mentions.users.first()) return message.channel.send('Please mention a **user** to vouch!');
  if(message.mentions.users.first().id == message.author.id) return message.channel.send("You can not vouch **yourself**!");

  const mentions = message.mentions.users.first();
  
  db.all(`SELECT * FROM Users WHERE Tag = ${mentions.id}`, (err, items) => {
    const vouches = items[0].Vouches;
    const vouchesSplit = items[0].Vouches.split(', ');
    if(vouchesSplit.includes(message.author.id)) return message.channel.send(`You have already vouched **${mentions.tag}**!`);
    
    let newVouch = message.author.id;
    if(vouches.length > 0) {
      newVouch = `${vouches}, ${message.author.id}`
    }
    
    db.run(`UPDATE Users SET Vouches = '${newVouch}' WHERE Tag = '${mentions.id}'`);
    message.channel.send(`Succesfully vouched **${mentions.tag}!**`);
  })
}

module.exports.help = {
  name: "vouch"
}