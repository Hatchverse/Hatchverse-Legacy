// COPYRIGHT UROMASTYX, 2019

const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const express = require('express');
const app = express();
const pug = require('pug');
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.API, bot);
app.set('view engine', 'pug')

global.db = './.data/hatchverse.db'
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

app.post('/dblwebhook', function(req, res) {
  if (req.headers.authorization == "hatch872verse012") {
    console.log(req)
  }
});
db.serialize(function(){
  if (!exists) {
    db.run("DROP TABLE Users")
    db.run('CREATE TABLE Users (Tag TEXT, Eggs INT, Gems INT, Inventory TEXT, LockedPets TEXT, Perks TEXT, Vouches TEXT, TradePending TEXT)');
    console.log('New table Users created!');
  };
});

const config = require('./config.json')

bot.commands = new Discord.Collection();

dbl.on('posted', () => {
  console.log('Server count posted!');
})

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
  // db.run("ALTER Table Users ADD COLUMN LockedPets TEXT");
  // db.run("UPDATE Users SET LockedPets = ''")
  // db.all("SELECT * FROM Users", (err, items) => {
  //   console.log(items[0])
  // })
  db.run(`UPDATE Users SET TradePending = '${false}'`);
  
 setInterval(() => {
   let statuses = [`${bot.users.size} eggheads 🥚`, `${bot.guilds.size} servers 💻`, `hatch.glitch.me/join 🥚`, `hatch.glitch.me/invite 🐶`]      
   let status = statuses[Math.floor(Math.random()*statuses.length)];
   
   bot.user.setActivity(status, { type: 'WATCHING' })
 }, 15000)
})

bot.on('message', async (message) => {
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let cmdFile = bot.commands.get(cmd.slice(prefix.length));
  
  if(cmdFile) {
    db.all(`SELECT EXISTS(SELECT 1 FROM Users WHERE Tag = '${message.author.id}' LIMIT 1)`, async (err, items) => {
      const exists = items[0][Object.keys(items[0])[0]];
      
      if(exists == false) {
        db.run("INSERT INTO Users (Tag, Eggs, Gems, Inventory, LockedPets, Perks, Vouches, TradePending) VALUES (?,?,?,?,?,?,?,?)", message.author.id, 0, 0, '', '', '', '', false);
        await sleep(500);
        cmdFile.run(bot, message, args);
      } else {
        cmdFile.run(bot, message, args);
      }
    })
  }

})


function sleep(ms){
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}

bot.login(process.env.TOKEN)

app.listen(process.env.PORT)
