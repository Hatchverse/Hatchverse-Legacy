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
      let receivePet;
    
      const sendReg = new RegExp(sendPet);
      const receiveReg = new RegExp(receivePet)
      const senderOwn = senderInv.filter(pet => pet.match(sendReg))
      
      if(senderOwn.length == 0) return message.channel.send(`You don't own **${sendPet}**`);
      
      message.channel.send('You receive?').then(() => {
        message.channel.awaitMessages(response => message.content, { max: 1, time: 10000, erros: ['time'] })
          .then((collected) => {
            
          })
        })
      })
      
//       const sendPet = args.slice(1).join('_');
//       const receivePet = args.slice(1).remove(sendPet);
      
//       console.log(sendPet)
//       console.log(receivePet)
      
//       const sendReg = new RegExp(sendPet);
//       const receiveReg = new RegExp(receivePet);
//       const senderOwn = senderInv.filter(pet => pet.match(sendReg))
//       const receiverOwn = receiverInv.filter(pet => pet.match(receiveReg))
      
//       if(senderOwn.length == 0) return message.channel.send(`You don't own **${sendPet}**`);
//       if(receiverOwn.length == 0) return message.channel.send(`${mention} does not own ${receivePet}`)
    })
  })
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

module.exports.help = {
  name: "trade"
}