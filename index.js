const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const express = require('express');
const app = express();
  
const dbFile = './.data/sqlite.db';
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

const config = require('./config.json')

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if (err) console.log(err);
  
  let file = files.filter(f => f.split(".").pop() === "js");
  if(file.length <= 0) {
    console.log('ERR: No commands found!');
    return;
  }
  file.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  })
})

bot.on('ready', async () => {
  console.log('Hatchverse has started!');
  
})

bot.on('message' async (message) => {
  let prefix = config.prefix;
})

app.get('/', function(req, res) {
  res.send("KEEPING ALIVE");
});