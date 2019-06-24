const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = './.data/hatchverse.db';
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const eggs = require('../modules/egg.js');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  eggs.beginner_egg(message);
}

module.exports.help = {
  name: "openegg"
}