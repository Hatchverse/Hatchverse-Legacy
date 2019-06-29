// COPYRIGHT UROMASTYX, 2019


const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const express = require('express');
const app = express();
const pug = require('pug');
app.set('view engine', 'pug')

global.db = './.data/hatchverse.db'
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);


db.serialize(function(){
  if (!exists) {
    db.run("DROP TABLE Users")
    db.run('CREATE TABLE Users (Tag TEXT, Eggs INT, Gems INT, Inventory TEXT, Perks TEXT, Vouches TEXT, TradePending TEXT)');
    console.log('New table Users created!');
  };
});

const config = require('./config.json')

bot.commands = new Discord.Collection();

app.get('/', function (req, res) {
  res.render('website', { users: bot.users.size + ' users - ' + bot.guilds.size + ' servers'});
});

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
  db.run(`UPDATE Users SET TradePending = '${false}'`);
  bot.user.setActivity(`${bot.users.size} eggheads 🥚`, { type: 'WATCHING' })
})

bot.on('message', async (message) => {
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, async (err, items) => {
    if(message.author.bot) return;
    let cmdFile = bot.commands.get(cmd.slice(prefix.length));
    
    if(items.length == 0 || typeof items == 'undefined') {
      db.run("INSERT INTO Users (Tag, Eggs, Gems, Inventory, Perks, Vouches, TradePending) VALUES (?,?,?,?,?,?,?)", message.author.id, 0, 0, '', '', '', false);
      await sleep(500);
      if(cmdFile) cmdFile.run(bot, message, args);
    } else {
      if(cmdFile) cmdFile.run(bot, message, args); 
    }
  })

})

bot.on("guildMemberAdd", member => {
  bot.user.setActivity(`${bot.users.size} eggheads 🥚`, {type: "WATCHING"})
})

function sleep(ms){
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}

bot.login(process.env.TOKEN)

app.listen(process.env.PORT)
