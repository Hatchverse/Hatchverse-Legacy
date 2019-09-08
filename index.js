// COPYRIGHT UROMASTYX, 2019

const Discord = require('discord.js');
const bot = new Discord.Client({ disableEveryone: true });
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
const DiscordBotListAPI = require('dbl-api');
const hatchhook = new Discord.WebhookClient("600942113643036693", "P82LUqSKAzGF86po5EpZD02y79VFYHCitWcxuiMFGZKe8f7k547_hRSnmaJbA1WGlVnb");
const api = new DiscordBotListAPI();

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
  
  let role = bot.guilds.get('591720572250226730').roles.find(r => r.name === "Supporter");
  console.log('Hatchverse has started!');
  api.on('upvote', function (user) {
  console.log(user + " just upvoted!");
  hatchhook.send(':ballot_box: <@' + user + "> just voted for <@591693828394844180>! They got the Supporter role for 12h! :white_check_mark:").then(function(message) {
  })
  bot.guilds.get('591720572250226730').members.get(user).addRole(role).then(function(){
    setTimeout(function(){
      bot.guilds.get('591720572250226730').members.get(user).removeRole('600968402487738389')
      }, 43164000);
    })
});

app.post('/dblwebhook', api.handler);
  
const fetch = require('node-fetch');
    fetch(`https://crystalbotlist.uk/api/bot/${bot.user.id}`, {
            method: 'POST',
            headers: {
                'Authorization': '867480386e9b35fc07dea8150a9592a328d3d4769b43b386cabf51a1e1bb4eeb2080be262a6fecd0e92b1bf691453e3657239f5bb9a2c16ccd9dc095e8f4eb1f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({server_count: bot.guilds.size})
        }).then(() => console.log('Posted server count to crystalbotlist.uk!'))
        .catch(err => console.log('Posting to crystalbotlist.uk failed!\n' + err.message));
  // db.run("ALTER Table Users ADD COLUMN LockedPets TEXT");
  // db.run("UPDATE Users SET LockedPets = ''")
  // db.all("SELECT * FROM Users", (err, items) => {
  //   console.log(items[0])
  // })
  db.run(`UPDATE Users SET TradePending = '${false}'`);
  
 setInterval(() => {
   let statuses = [`${bot.users.size} eggheads 🥚`, `${bot.guilds.size} servers 💻`, `hatch.glitch.me/join 🥚`, `hatch.glitch.me/invite 🐶`, `Hatchverse being Reborn`]      
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
  
  if(message.author.bot) return;
  
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
