const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = './.data/1234.db';
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const eggs = require('../modules/egg.js');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  db.all(`SELECT Tag FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    console.log(items)
    if (items.length == 0) {
      db.run("INSERT INTO Users (Gems, Inventory, Tag) VALUES ('0','',?)", message.author.id)
      message.channel.send("created user, " + message.author.id)
    } else {
      message.channel.send("exists")
    }
  })
  eggs.beginner_egg(message);
}

module.exports.help = {
  name: "openegg"
}