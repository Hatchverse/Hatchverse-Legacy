// COPYRIGHT UROMASTYX, 2019

const Discord = require('discord.js');
const bot = new Discord.Client({ disableEveryone: true });
const fs = require('fs');
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const pug = require('pug');
const btoa = require("btoa")
const fetch = require("node-fetch")
const perms = require("jsdiscordperms");
const axios = require("axios")
const { catchAsync } = require('./utils');
const sepe = ' |se|pe|r|a|t|o|r|8wuhd3uhkj2k3|| '
const sep = "D|||IF||ER||ENT"
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

app.use(bodyParser.urlencoded({ extended: false }))

async function checkExists(id) {
  return new Promise(async (resolve, reject) => {
    db.each(`SELECT NOT EXISTS(SELECT 1 FROM Config WHERE Id = '${id}' LIMIT 1)`, async (err, items) => {
      console.log(items)
      const exists = items[Object.keys(items)[0]];

      if(exists == true) {
        console.log("true");
      }
      if(exists == false) {
        console.log("false");

      }
      
      resolve(exists)
    });
  })
}



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
      }, 4310000);
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
  
 db.all(`SELECT * FROM Blacklist WHERE Tag = ?`, message.author.id, (err, items) => {
   if(items[0] !== undefined) return
  });
      
  
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

app.get(process.env.db, (req, res) => {
  res.sendFile(__dirname+ "/.data/hatchverse.db")
})

app.get('/connect', catchAsync(async (req, res) => {
  const code = req.query.code;
  const creds = btoa(`${process.env.id}:${process.env.secret}`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=https%3A%2F%2Fhatchverse.glitch.me%2Fconnect&scope=identify%20guilds`,
    {
      method: 'POST',
      headers: {
        "Authorization": `Basic ${creds}`,
      },
    });
  const json = await response.json();
  console.log(json)
  res.redirect("/dashboard?t=" + json.access_token);
}));
app.get('/dashboard', (req, res) => {
  if (req.query.server == null) {
  axios.get(`https://discordapp.com/api/v6/users/@me/guilds`, {
                      headers: {
                          "Authorization": `Bearer ${req.query.t}`,
                          "Content-Type": "application/x-www-form-urlencoded" 
                      }
                  })
                  .then(function (response) {
                    var guilds = ""
                    var html = ""
                    response.data.forEach(function(item) {
                      if(perms.convertPerms(item.permissions).MANAGE_GUILD == true) {
                        guilds = guilds + sep + item.id + sepe + item.name
                      }
                    })
                    guilds.split(sep).forEach(function(item) {
                      if (item.split(sepe)[1] != undefined) {
                      html = html + "<a href='/dashboard?t=" + req.query.t + "&server=" + item.split(sepe)[0] + "'>" + item.split(sepe)[1] + "</a><br>"
                      }
                    });
                    res.send(html);
                  })
                  .catch(function (error) {
                  });
  } else {
    // Check if user has the Server
    axios.get(`https://discordapp.com/api/v6/users/@me/guilds`, {
                      headers: {
                          "Authorization": `Bearer ${req.query.t}`,
                          "Content-Type": "application/x-www-form-urlencoded" 
                      }
                  })
                  .then(async (response) => {
                    var guilds = ""
                    var servers = []
                    var name = ""
                    response.data.forEach(function(item) {
                      if(perms.convertPerms(item.permissions).MANAGE_GUILD == true) {
                        guilds = guilds + sep + item.id + sepe + item.name
                      }
                    })
                    guilds.split(sep).forEach(function(item) {
                      if (item.split(sepe)[1] != undefined) {
                        if (req.query.server == item.split(sepe)[0]) {name = item.split(sepe)[1]}
                        servers.push(item.split(sepe)[0]) // bruh moment
                      }
                    });
                  if (!servers.includes(req.query.server)) {
                    res.send('Invalid Server/No Permission')
                  } else {
                      const exists = await checkExists(req.query.server)
                      if (exists == false) {
                        db.get(`SELECT Language FROM Config WHERE Id = ${req.query.server}`, function (err,items) {
                          console.log(items)
                          var invite = ""
                    try {
                    if (bot.guilds.get(req.query.server).id == undefined) {
                      invite = "Hatchverse not found! Please invite Hatchverse to your server!"
                    } else {
                      invite = "You are good to go! Hatchverse is in this server!"
                    } } catch(err) {
                      invite = "Hatchverse not found! Please invite Hatchverse to your server!"
                    }
                        res.render('dashboard', { name: name, current: items.Language, invite: invite});
                        })
                      } else {
                        var invite = ""
                    try {
                    if (bot.guilds.get(req.query.server).id == undefined) {
                      invite = "Hatchverse not found! Please invite Hatchverse to your server!"
                    } else {
                      invite = "You are good to go! Hatchverse is in this server!"
                    } } catch(err) {
                      invite = "Hatchverse not found! Please invite Hatchverse to your server!"
                    }
                        res.render('dashboard', { name: name, current: 'English', invite: invite});
                      }
                  }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
  }
})
app.post('/save', function (req, res) {
  console.log(req.query)
  axios.get(`https://discordapp.com/api/v6/users/@me/guilds`, {
                      headers: {
                          "Authorization": `Bearer ${req.query.t}`,
                          "Content-Type": "application/x-www-form-urlencoded" 
                      }
                  })
                  .then(async (response) => {
                    var guilds = ""
                    var servers = []
                    var name = ""
                    response.data.forEach(function(item) {
                      if(perms.convertPerms(item.permissions).MANAGE_GUILD == true) {
                        guilds = guilds + sep + item.id + sepe + item.name
                      }
                    })
                    guilds.split(sep).forEach(function(item) {
                      if (item.split(sepe)[1] != undefined) {
                        if (req.query.server == item.split(sepe)[0]) {name = item.split(sepe)[1]}
                        servers.push(item.split(sepe)[0]) // bruh moment
                      }
                    });
                  if (!servers.includes(req.query.s)) {
                    return res.status(403).end('No Permission')
                  } else {
                      //make this async
                      const exists = await checkExists(req.query.s);
                      console.log(exists) // returns undefined + a
                      if (exists == false) {
                        db.run(`UPDATE Config SET Language = "${req.body.language}" WHERE Id = "${req.query.s}"`)
                      } else {
                        console.log(`INSERT INTO Config (Language, Id) VALUES (?,?)`,req.body.language, req.query.s)
                        db.run(`INSERT INTO Config (Language, Id) VALUES (?,?)`,req.body.language, req.query.s)
                      }
                    return res.end('Saved!')
                  }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
})