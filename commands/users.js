const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  db.all("SELECT COUNT(*) FROM Users", (err, items) => {
    message.channel.send(items[0]["COUNT(*)"] + "")
  })
}

module.exports.help = {
  name: "count"
}