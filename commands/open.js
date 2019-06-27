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
    let inventory = items[0].Inventory.split(', ').length;
    let perks = items[0].Perks;
    
    if(args.join(" ").toLowerCase() == "beginner egg") {
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      if(perks == 'd') return double(eggs.beginner_egg);
      if(perks == 't') return triple(eggs.beginner_egg);
      eggs.beginner_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "spotted egg") {
      if(items[0].Eggs < 50) return message.channel.send(`You need to have **50** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      if(perks == 'd') return double(eggs.spotted_egg);
      if(perks == 't') return triple(eggs.spotted_egg);
      eggs.spotted_egg(message)
    }
    
     if(args.join(" ").toLowerCase() == "ice shard egg") {
      if(items[0].Eggs < 100) return message.channel.send(`You need to have **100** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
       if(perks == 'd') return double(eggs.ice_shard_egg);
      if(perks == 't') return triple(eggs.ice_shard_egg);
      eggs.ice_shard_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "spikey egg") {
      if(items[0].Eggs < 150) return message.channel.send(`You need to have **150** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      if(perks == 'd') return double(eggs.spikey_egg);
      if(perks == 't') return triple(eggs.spikey_egg);
      eggs.spikey_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "slimey egg") {
      if(items[0].Eggs < 200) return message.channel.send(`You need to have **100** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      if(perks == 'd') return double(eggs.slimey_egg);
      if(perks == 't') return triple(eggs.slimey_egg);
      eggs.slimey_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "rainbow egg") {
      if(items[0].Eggs < 125) return message.channel.send(`You need to have **125** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      if(perks == 'd') return double(eggs.rainbow_egg);
      if(perks == 't') return triple(eggs.rainbow_egg);
      eggs.rainbow_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "stonks egg") {
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      if(perks == 'd') return double(eggs.stonks_egg);
      if(perks == 't') return triple(eggs.stonks_egg);
      eggs.stonks_egg(message)
    }
    
    if(args.join(" ").toLowerCase() == "hack week egg") {
      if(items[0].Eggs < 50) return message.channel.send(`You need to have **50** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('You have reached the max inventory space! Please use `()remove <pet name | all>`');
      if(perks == 'd') return double(eggs.hack_week_egg);
      if(perks == 't') return triple(eggs.hack_week_egg);
      eggs.hack_week_egg(message)
    }
  
  })
  
  function double(egg) {
    for (let i = 0; i < 2; i++) {
      ((index) => {
        setTimeout(() => egg(message), i * 500)
      })(i);
    }
  }
  
  function triple(egg) {
    for (let i = 0; i < 3; i++) {
      ((index) => {
        setTimeout(() => egg(message), i * 500)
      })(i);
    }
  }
}


module.exports.help = {
  name: "open"
}