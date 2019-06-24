const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = __dirname+ '/hatchverse4.db';
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const eggs = require('../modules/egg.js');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  db.all("SELECT Tag FROM Users", (err, items) => {
    db.run("")
  })
  
  
}

module.exports.help = {
  name: "openegg"
}