const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  db.all(`SELECT Inventory FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    if (args[0].toLowerCase() == 'all') {
      db.run("UPDATE Users SET Inventory = '' WHERE Tag = ?", message.author.id)
      message.channel.send(`Successfully removed **${items[0].Inventory.split(', ').length - 1}** pets!`)
    } else {
      let pets = items[0].Inventory.split(', ').slice(1);
      pets.forEach(pet => {
        if(pet.includes(`<:${args.join("_")}`)) {
          pets.remove(pet);
          db.run("UPDATE Users SET Inventory = ? WHERE Tag = ?", , message.author.id)
        }
      })
      
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