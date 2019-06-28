const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(!args[0]) return message.channel.send('`Syntax Error:` ()remove **<all | pet name>**')
  
  db.all(`SELECT Inventory FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    //DB consts
    const inventory = items[0].Inventory.split(', ');
    
    //Remove all
    if(args[0].toLowerCase() == 'all') {
      db.run("UPDATE Users SET Inventory = '' WHERE Tag = ?", message.author.id)
      message.channel.send(`Successfully removed **${inventory.length}** pets!`);
    } else if(args[0].toLowerCase() == 'single') {
      const pet = args.slice(1).join('_');
      const petReg = new RegExp(pet, 'i');

      const petFilter = inventory.find(pet => pet.match(petReg));
      if(!petFilter) return message.channel.send(`\`Error:\` You don't own a **${args.slice(1).join(" ")}**!`);

      const newInv = remove(inventory, petFilter);
      db.run("UPDATE Users SET Inventory = ? WHERE Tag = ?", newInv.join(", "), message.author.id)
      message.channel.send(`Successfuly removed **1** pet!`);
    } else {
      //Remove all pet names
      const pet = args.join('_');
      const petReg = new RegExp(pet, 'i');

      const petFilter = inventory.filter(pet => pet.match(petReg));
      if(petFilter.length == 0) return message.channel.send(`\`Error:\` You don't own a **${args.join(" ")}**!`);

      const newInv = inventory.remove(petFilter[0]);
      db.run("UPDATE Users SET Inventory = ? WHERE Tag = ?", newInv.join(", "), message.author.id)
      message.channel.send(`Successfuly removed **${petFilter.length}** pets!`); 
    }
  })
}

//Array removing functions
Array.prototype.remove = function() {
  let what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

//Array removing functions
function remove(array, search) {
  let index = array.indexOf(search);
  if (index !== -1) {
    array.splice(index, 1);
  }
  
  return array;
}

module.exports.help = {
  name: "remove"
}