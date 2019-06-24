const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const eggs = require('../modules/eggs.js');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    if(items.length == 0) {
      db.run("INSERT INTO Users (Tag, Eggs, Gems, Inventory) VALUES (?,?,?,?)", message.author.id, 0, 0, '');
    }
    
    if(args.join(" ").toLowerCase() == "beginner egg") {
      if(items[0].Inventory.split(', ').length >= 50) return message.channel.send(`You have reached the max inventory space! Please `)
      eggs.beginner_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "spotted egg") {
      if(items[0].Eggs < 25) return message.channel.send(`You need to have 25 eggs opened to unlock this egg!`)
      eggs.spotted_egg(message)
    }
  
  })
}

module.exports.help = {
  name: "open"
}