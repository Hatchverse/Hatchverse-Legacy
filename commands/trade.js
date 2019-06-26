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
      
      const sendPet = args.slice(1).join('_');
      const receivePet = args.slice(2).join('_');
      
      const reg = new RegExp(pet);
      const senderOwn = senderInv.filter(pet => pet.match(reg))
      const receiverOwn = receiverInv.filter(pet => pet.match(reg))
      
      if(senderOwn.length == 0) return message.channel.send(`You don't own **${pet}**`);
      if(receiverOwn.length == 0) return message.channel.send(`${mention} does not own ${}`)
    })
  })
}
module.exports.help = {
  name: "trade"
}