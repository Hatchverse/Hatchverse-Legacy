const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  //DB select
  db.all(`SELECT * FROM Users WHERE Tag = ${message.author.id}`, (err, items) => {
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
      .setAuthor(`${message.author.username}'s Inventory`, message.author.displayAvatarURL)
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
      message.channel.send(`\`Error:\` You have too many **pets**! (**${space}/50**)`)
    }
  
  })
  

}

module.exports.help = {
  name: "inventory"
}