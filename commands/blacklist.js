const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  const devs = [
    "302599378332549121",
    "302527751745961985",
    "198135885118570497",
    "251123922005786624",
    "374756186525794305",
    "640224786366201856"
  ]
  
  if(!devs.includes(message.author.id)) return message.reply('You cannot blacklist!');
  if(args[0]) {
    db.all(`SELECT * FROM Blacklist WHERE Tag = ?`, args[0], (err, item) => {
      if(item[0].Tag === args[0]) {
        //remove from blacklist
        db.run(`DELETE FROM Blacklist WHERE Tag = ?`, args[0])
        message.channel.send("*Unblacklisted user!*")
      } else {
      db.run(`INSERT INTO Blacklist (Tag) VALUES (?)`, args[0])
        message.channel.send("*Blacklisted user!*")
      }
    })
   
  }
  
}

module.exports.help = {
  name: "blacklist"
}