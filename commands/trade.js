const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(!message.mentions.first()) return message.channel.send('Please mention a **user**!');
  const mention = message.mentions.first();
  db.all(`SELECT Inventory FROM User WHERE Tag = '${message.author.id}'`, (err, sender) => {
    db.all(`SELECT Inventory FROM User WHERE Tag = '${mention.id}'`, (err, receiver) => {
    // ()trade @whatehrerh :doggy: :kitty:
      const senderInv = sender[0].Inventory.split(', ');
      const receiverInv = sender[0].Inventory.split(', ');
      console.log(senderInv)
      console.log(receiverInv)
    })
  })
}
module.exports.help = {
  name: "trade"
}