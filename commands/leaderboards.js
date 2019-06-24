const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  var type = args[0].toLowerCase()
  if (type == "gems" || type ==  "gem" || type ==  "money" || type ==  "$") {
    db.all("SELECT Tag FROM Users ORDER BY Gems DESC;", (err, items) => {
      console.log((items))
    })
  } else {
    db.all("SELECT Eggs FROM Users ORDER BY Eggs DESC LIMIT 25;", (err, items) => {
      message.channel.send(String(items))
    })
  }

}

module.exports.help = {
  name: "leaderboard"
}