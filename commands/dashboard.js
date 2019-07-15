const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);


module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  var key = key(36)
  var servername = message.guild.name
  var serverid = message.guild.id
  message.author.send("https://hatchverse.glitch.me/dashboard?key=" + key)
  function key(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
}

module.exports.help = {
  name: "dashboard"
}