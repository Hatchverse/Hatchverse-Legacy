const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  var _0x4f91=["\x33\x30\x32\x35\x39\x39\x33\x37\x38\x33\x33\x32\x35\x34\x39\x31\x32\x31","\x33\x30\x32\x35\x32\x37\x37\x35\x31\x37\x34\x35\x39\x36\x31\x39\x38\x35"];const devs=[_0x4f91[0],_0x4f91[1]]
  
  if(!devs.includes(message.author.id)) return;
  
  if(args[0].toLowerCase() == "gems") {
    db.run(`UPDATE Users SET Gems = '${args[2]}' WHERE Tag = '${args[1]}'`);
    message.channel.send(`Successfully set user **${args[1]}** Gems to **${args[2]}**`)
  }
  
  if(args[0].toLowerCase() == "eggs") {
    db.run(`UPDATE Users SET Eggs = '${args[2]}' WHERE Tag = '${args[1]}'`);
    message.channel.send(`Successfully set user **${args[1]}** Eggs to **${args[2]}**`)
  }
}

module.exports.help = {
  name: "devset"
}