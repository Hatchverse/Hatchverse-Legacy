const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  var pet = "<:" + "Hacked_Overlord:591827107051733013>";
  console.log(args.join(" "))
  eval(args.join(" "))
  

}

module.exports.help = {
  name: "js"
}