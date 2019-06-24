const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const { addpet } = require('../modules/addpet.js');
const devs = [
  '302527751745961985',
  '302527751745961985',
  '302527751745961985',
  '302527751745961985',
  '251123922005786624',
  '302599378332549121'
]

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(!devs.includes(message.author.id)) return;
  eval(args.join(' ')) // nice
  

}

module.exports.help = {
  name: "js"
}