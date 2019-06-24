const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const express = require('express');
const app = express();
  
const dbFile = './.data/hatchverse.db';
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

app.get('/', (req, res) => {
  res.send("Hatchverse Working V1.0");
});

db.serialize(function(){
  if (!exists) {
    db.run('CREATE TABLE Users (Gems TEXT, Inventory TEXT, Tag TEXT)');
    console.log('New table Users created!');
  } else {
    console.log("Table 'Users' already created.")
  }
});

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

bot.on('message', async (message) => {
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  let cmdFile = bot.commands.get(cmd.slice(prefix.length));
  if(cmdFile) cmdFile.run(bot, message, args);
})

bot.login(process.env.TOKEN)

var listener = app.listen(process.env.PORT, function() {
});