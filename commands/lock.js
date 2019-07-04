const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(!args[0]) return message.channel.send('`Syntax Error:` ()lock **<pet name>**')
  db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    const inventory = items[0].Inventory.split(', ');
    const lockedpets = items[0].LockedPets;
    
    const pet = args.join('_');
    const petReg = new RegExp(pet, 'i');

    const petFilter = inventory.filter(pet => pet.match(petReg));
    if(petFilter.length == 0) return message.channel.send(`\`Error:\` You don't own a **${args.join(" ")}**!`);
    
    const newInv = remove(inventory, petFilter[0]);
    db.run("UPDATE Users SET Inventory = ? WHERE Tag = ?", newInv.join(", "), message.author.id)
    const newLockPets = (lockedpets.length > 0) ? lockedpets + ', ' + petFilter[0] : petFilter[0];
    db.run("UPDATE Users SET LockedPets = ? WHERE Tag = ?", newLockPets, message.author.id)
    message.channel.send(`Successfully locked **${args.join(" ")}**!`)
  })
}

function remove(array, search) {
  let index = array.indexOf(search);
  if (index !== -1) {
    array.splice(index, 1);
  }
  
  return array;
}

module.exports.help = {
  name: "lock"
}