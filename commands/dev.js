 const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const { addpet } = require('../modules/addpet.js');
const { addgems } = require('../modules/addgems.js');

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  const devs = [
    "302599378332549121",
    "302527751745961985",
    "198135885118570497",
    "251123922005786624",
    "374756186525794305"
  ]
  
  if(!devs.includes(message.author.id)) return;
  
  if(args[0].toLowerCase() == "gems") {
    db.run(`UPDATE Users SET Gems = '${args[2]}' WHERE Tag = '${args[1]}'`);
    message.channel.send(`Successfully set user **${args[1]}** Gems to **${args[2]}**`);
  }
  
  if(args[0].toLowerCase() == "eggs") {
    db.run(`UPDATE Users SET Eggs = '${args[2]}' WHERE Tag = '${args[1]}'`);
    message.channel.send(`Successfully set user **${args[1]}** Eggs to **${args[2]}**`)
  }
  
  if(args[0].toLowerCase() == "addpet") {
    const petId = `<:${args[1]}:${args[2]}>`
    addpet(petId, args[3]);
    message.channel.send(`Successfully added **${args[1]}** to **${args[3]}**'s inventory`)
  }
  
  if(args[0].toLowerCase() == "perks") { // disgusting clean up please 
    switch (args[1].toLowerCase()) {
      case 'triple':
        db.run(`UPDATE Users SET Perks = 't' WHERE Tag = '${args[2]}'`);
        break;
      case 'double':
        db.run(`UPDATE Users SET Perks = 'd' WHERE Tag = '${args[2]}'`)
        break;
    }
  }
  
  if(args[0].toLowerCase() == "reset") {
    if(args[1]) {
      db.run(`UPDATE Users SET Gems = '0' WHERE Tag = '${args[1]}'`)
      db.run(`UPDATE Users SET Eggs = '0' WHERE Tag = '${args[1]}'`)
      db.run(`UPDATE Users SET Perks = '' WHERE Tag = '${args[1]}'`)
      db.run(`UPDATE Users SET Vouches = '' WHERE Tag = '${args[1]}'`)
      db.run(`UPDATE Users SET Inventory = '' WHERE Tag = '${args[1]}'`)
      message.channel.send(`Successfully reset user **${args[1]}**`)
      return;
    } else {
    db.run('DELETE FROM Users')
    message.channel.send(`Successfully reset Hatchverse DB`)
    }
  }
  if(args[0].toLowerCase() == "js") {
    var newargs = args.splice(1).join(" ")
    console.log(newargs)
    eval(newargs)
  }
  

}

module.exports.help = {
  name: "dev"
}