const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const eggs = require('../modules/eggs.js');
const usedCmd = new Set();

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(usedCmd.has(message.author.id)) {
    return;
  } else {
    usedCmd.add(message.author.id);
    setTimeout(() => {
      usedCmd.delete(message.author.id);
    }, 1500)
  }
  
  db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    if(items.length == 0 || typeof items == 'undefined') {
      db.run("INSERT INTO Users (Tag, Eggs, Gems, Inventory, Perks) VALUES (?,?,?,?,?)", message.author.id, 0, 0, '', '');
      message.channel.send('**Successfully created user data!**')
      return;
    }
    
    let inventory = items[0].Inventory.split(', ').length;
    
    if(args.join(" ").toLowerCase() == "beginner egg") {
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      eggs.beginner_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "spotted egg") {
      if(items[0].Eggs < 25) return message.channel.send(`You need to have **25** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      eggs.spotted_egg(message)
    }
    
     if(args.join(" ").toLowerCase() == "ice shard egg") {
      if(items[0].Eggs < 75) return message.channel.send(`You need to have **75** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      eggs.ice_shard_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "spikey egg") {
      if(items[0].Eggs < 135) return message.channel.send(`You need to have **135** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      eggs.spikey_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "slimey egg") {
      console.log(items)
      if(items[0].Eggs < 200) return message.channel.send(`You need to have **200** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      eggs.slimey_egg(message)
    }
  
  })
}

module.exports.help = {
  name: "open"
}