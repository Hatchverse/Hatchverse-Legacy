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
  if(!args[0]) return message.channel.send('`Syntax Error:` ()open **<egg name>**');
  
  //Command cooldown
  if(usedCmd.has(message.author.id)) {
    return;
  } else {
    usedCmd.add(message.author.id);
    setTimeout(() => {
      usedCmd.delete(message.author.id);
    }, 1500)
  }
  
  db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    //Db consts
    const inventory = items[0].Inventory.split(', ').length;
    const perks = items[0].Perks;
    const egg = items[0].Eggs;
    
    //Beginning of egg statments
    
    //Beginner egg
    if(args.join(" ").toLowerCase() == "beginner egg") {
      if(inventory >= 50) return message.channel.send('`Error:` You have reached the **max** inventory space! Use `()remove <pet name | all>` to get rid of some unwanted **pets**...');
      if(perks == 'd') return double(eggs.beginner_egg);
      if(perks == 't') return triple(eggs.beginner_egg);
      eggs.beginner_egg(message)
    }
    
    //Spotted egg
    if(args.join(" ").toLowerCase() == "spotted egg") {
      if(egg < 50) return message.channel.send(`\`Error:\` You need to have **50** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('`Error:` You have reached the **max** inventory space! Use `()remove <pet name | all>` to get rid of some unwanted **pets**...`');
      if(perks == 'd') return double(eggs.spotted_egg);
      if(perks == 't') return triple(eggs.spotted_egg);
      eggs.spotted_egg(message)
    }
    
    //Ice shard egg
    if(args.join(" ").toLowerCase() == "ice shard egg") {
      if(egg < 100) return message.channel.send(`\`Error:\` You need to have **100** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('`Error:` You have reached the **max** inventory space! Use `()remove <pet name | all>` to get rid of some unwanted **pets**...`');
      if(perks == 'd') return double(eggs.ice_shard_egg);
      if(perks == 't') return triple(eggs.ice_shard_egg);
      eggs.ice_shard_egg(message)
    }
    
    //Spikey egg
    if(args.join(" ").toLowerCase() == "spikey egg") {
      if(egg < 150) return message.channel.send(`\`Error:\` You need to have **150** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('`Error:` You have reached the **max** inventory space! Use `()remove <pet name | all>` to get rid of some unwanted **pets**...`');
      if(perks == 'd') return double(eggs.spikey_egg);
      if(perks == 't') return triple(eggs.spikey_egg);
      eggs.spikey_egg(message)
    }
    
    //Slimey egg
    if(args.join(" ").toLowerCase() == "slimey egg") {
      if(egg < 200) return message.channel.send(`\`Error:\` You need to have **200** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('`Error:` You have reached the **max** inventory space! Use `()remove <pet name | all>` to get rid of some unwanted **pets**...`');
      if(perks == 'd') return double(eggs.slimey_egg);
      if(perks == 't') return triple(eggs.slimey_egg);
      eggs.slimey_egg(message)
    }
    
    //Rainbow egg
    if(args.join(" ").toLowerCase() == "rainbow egg") {
      if(egg < 250) return message.channel.send(`\`Error:\` You need to have **250** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('`Error:` You have reached the **max** inventory space! Use `()remove <pet name | all>` to get rid of some unwanted **pets**...`');
      if(perks == 'd') return double(eggs.rainbow_egg);
      if(perks == 't') return triple(eggs.rainbow_egg);
      eggs.rainbow_egg(message)
    }
    
    
    
    //Special Eggs
    if(args.join(" ").toLowerCase() == "tester egg") {
      const testers = [
        "256187890495782912",
        "553029704177942528",
        "403259630437793804",
        "368186884108582914",
        "253871855255945220",
        "394162222340767745",
        "302527751745961985",
        "198135885118570497",
        "374756186525794305",
        "251123922005786624",
        "302599378332549121"
      ]
      if(!testers.includes(message.author.id)) return;
      if(inventory >= 50) return message.channel.send('`Error:` You have reached the **max** inventory space! Use `()remove <pet name | all>` to get rid of some unwanted **pets**...`');
      eggs.tester_egg(message)
    }
    
    //Event eggs
    if(args.join(" ").toLowerCase() == "hack week egg") {
      if(egg < 50) return message.channel.send(`\`Error:\` You need to have **50** eggs opened to unlock this egg!`)
      if(inventory >= 50) return message.channel.send('`Error:` You have reached the **max** inventory space! Use `()remove <pet name | all>` to get rid of some unwanted **pets**...`');
      if(perks == 'd') return double(eggs.hack_week_egg);
      if(perks == 't') return triple(eggs.hack_week_egg);
      eggs.hack_week_egg(message)
    }
    //End of egg if statments
  })
  
  //Opening functions
  function double(egg) {
    for (let i = 0; i < 2; i++) {
      ((index) => {
        setTimeout(() => egg(message), i * 500)
      })(i);
    }
  }
  //Opening functions
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