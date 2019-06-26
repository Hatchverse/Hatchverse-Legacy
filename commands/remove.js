const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  //Krxnky: May redo this with regex and filter
  
  db.all(`SELECT Inventory FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    const inventory = items[0].Inventory.split(', ');
    
    if(args[0].toLowerCase() == 'all') {
      db.run("UPDATE Users SET Inventory = '' WHERE Tag = ?", message.author.id)
      message.channel.send(`Successfully removed **${inventory.length}** pets!`);
    } else {
      
      const pet = args.join('_');
      const petReg = new RegExp(pet, 'i');
      
      const petFilter = inventory.filter(pet => pet.match(petReg));
      if(petFilter.length == 0) return message.channel.send(`You don't own a **${args.join(" ")}**!`);
      
      console.log(petFilter)
      
      const newInv = inventory.remove(petFilter[0]);
      db.run("UPDATE Users SET Inventory = ? WHERE Tag = ?", newInv.join(", "), message.author.id)
      message.channel.send(`Successfuly removed **${petFilter.length}** pets!`);
    }
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
  name: "remove"
}