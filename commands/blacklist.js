 const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const { addpet } = require('../modules/addpet.js');
const { addgems } = require('../modules/addgems.js');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  const devs = [
    "302599378332549121",
    "302527751745961985",
    "198135885118570497",
    "251123922005786624",
    "374756186525794305"
  ]
  
  if(!devs.includes(message.author.id)) return;
  message.channel.send(`**${args[0]}** has been blacklisted by ${message.author} for \`${args[1]}\`!`)
  
}

module.exports.help = {
  name: "blacklist"
}