const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = './.data/hatch.db';
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  db.all(`SELECT Inventory FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    console.log(items)
  })
}

module.exports.help = {
  name: "inventory"
}