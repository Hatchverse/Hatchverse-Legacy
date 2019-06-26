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
  if(message.mentions.users.first().id == message.author.id) return message.channel.send("You can not trade **yourself**!");
  if(!args[1]) return message.channel.send('Please specify a **pet** to give!');

  const mentions = message.mentions.users.first();

  db.all(`SELECT Inventory FROM Users WHERE Tag = '${message.author.id}'`, (err, sinv) => {
    db.all(`SELECT Inventory FROM Users WHERE Tag = '${mentions.id}'`, (err, rinv) => {
      if (sinv[0].Inventory.length == 0) return message.channel.send('You have no **pets** to trade!')
      if (rinv[0].Inventory.length == 0) return message.channel.send(`${mentions} has no **pets** to trade!`)
      
      const sender = sinv[0].Inventory.split(', ');
      const receiver = rinv[0].Inventory.split(', ');
      
      const sendReg = new RegExp(args.slice(1).join("_"))
      const senderOwn = sender.filter(pet => pet.match(sendReg))

      if(senderOwn.length == 0) return message.channel.send(`You don't own a **${args.slice(1).join("_")}**`);
      
      message.channel.send('You **receive**?');
      
      const filter = m => m.author.id === message.author.id;
      message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ["time"] }).then((collected) => {
        
      }).catch(err => message.delete)
    })
  }); 
}

module.exports.help = {
  name: "trade"
}