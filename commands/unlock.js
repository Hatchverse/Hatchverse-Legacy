const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(!args[0]) return message.channel.send('`Syntax Error:` ()unlock **<pet name>**')
  db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    const inventory = items[0].Inventory.split(', ');
    const lockedpets = items[0].LockedPets.split(', ');
    
    const pet = args.join('_');
    const petReg = new RegExp(pet, 'i');

    const petFilter = lockedpets.filter(pet => pet.match(petReg));
    if(petFilter.length == 0) return message.channel.send(`\`Error:\` You don't own a **${args.join(" ")}**!`);
    
    const newInv = (inventory.length > 0) ? inventory.join(', ') + ', ' + petFilter[0] : petFilter[0];
    db.run("UPDATE Users SET Inventory = ? WHERE Tag = ?", newInv, message.author.id)
    const newLockPets = remove(lockedpets, petFilter[0]);
    db.run("UPDATE Users SET LockedPets = ? WHERE Tag = ?", newLockPets.join(", "), message.author.id)
    message.channel.send(`Successfully unlocked **${args.join(" ")}**!`)
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
  name: "unlock"
}