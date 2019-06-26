const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(!message.mentions.users.first()) return message.channel.send('Please mention a **user**!');
  const mention = message.mentions.users.first();
  db.all(`SELECT Inventory FROM Users WHERE Tag = '${message.author.id}'`, (err, sender) => {
    db.all(`SELECT Inventory FROM Users WHERE Tag = '${mention.id}'`, (err, receiver) => {
    // ()trade @whatehrerh :doggy: :kitty:
      const senderInv = sender[0].Inventory.split(', ');
      const receiverInv = receiver[0].Inventory.split(', ');
      const reg = new RegExp('/' + args[1] + '/g');
      console.log(reg)
      message.channel.send(senderInv.filter(pet => reg));
    })
  })
}
module.exports.help = {
  name: "trade"
}