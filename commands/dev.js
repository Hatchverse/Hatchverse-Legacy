const Discord = require('discord.js');
const config = require('../config.json');
const fs = require("fs");
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
    "640224786366201856"
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
        message.channel.send(`Successfully added **Triple Egg** perk to **${args[2]}**`)
        break;
      case 'double':
        db.run(`UPDATE Users SET Perks = 'd' WHERE Tag = '${args[2]}'`)
        message.channel.send(`Successfully added **Double Egg** perk to **${args[2]}**`)
        break;
      case 'none':
        db.run(`UPDATE Users SET Perks = '' WHERE Tag = '${args[2]}'`)
        message.channel.send(`Successfully set **${args[2]}**'s perks to **None**`)
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
      db.run(`UPDATE Users SET TradePending = '${false}' WHERE Tag = '${args[1]}'`)
      message.channel.send(`Successfully reset user **${args[1]}**`)
      return;
    } else {
      db.run('DELETE FROM Users')
      message.channel.send(`Successfully reset Hatchverse DB`)
    }
  }
if(args[0].toLowerCase() == "viewinv") {
var user = bot.users.get(args[1])
db.all(`SELECT * FROM Users WHERE Tag = ${args[1]}`, (err, items) => {
    //If statements
    if(items[0].Inventory.length + items[0].LockedPets.length == 0) return message.channel.send('`Error:` You have no **pets**! Use `()open Beginner Egg` to get **started**...');
    
    //DB consts
    const gems = items[0].Gems;
    const inventory = items[0].Inventory;
    const lockedpets = items[0].LockedPets;
    const eggs = items[0].Eggs;
  
    //Inv if statments
    const perks = (items[0].Perks == 'd') ? 'Double Egg' : (items[0].Perks == 't' ? 'Triple Egg' : 'None');
    const space = (inventory == '') ? 0 : inventory.split(', ').length;
    const lockpetspace = (lockedpets == '') ? 0 : lockedpets.split(', ').length;
    const vouches = (items[0].Vouches == '') ? 0 : items[0].Vouches.split(', ').length;
  
    try {
      //Inventory embed
      let embed = new Discord.RichEmbed()
      .setAuthor(`${user.username}'s Inventory`, user.displayAvatarURL)
      .setColor('#9c13f7')
      .setDescription(`:unlock: ${items[0].Inventory.split(', ').join("")}\n:lock: ${items[0].LockedPets.split(', ').join("")}`)
      .addField('Eggs Opened', `:egg: ${eggs}`, true)
      .addField('Space', `:package: ${space + lockpetspace}/50`, true)
      .addField('Gems', `<:Gem:592857805380255745> ${gems}`, true)
      .addField('Perks', `:arrow_up: ${perks}`, true)
      .addBlankField(true)
      .addField('Vouches', `:ballot_box_with_check: ${vouches}`, true)
      .setFooter(bot.user.username)
      .setTimestamp()
    
      message.channel.send(embed)
    } catch (error) {
      //If error send you have too many pets
      message.channel.send(`\`Error:\` They have too many **pets**! (**${space}/50**)`)
    }
  
  })
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