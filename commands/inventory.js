const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  db.all(`SELECT * FROM Users WHERE Tag = ${message.author.id}`, (err, items) => {
    if(items[0].length == 0) return message.channel.send('You have no pets! Use `()open Beginner Egg` to get started')
    let perks = 'None';
    if (items[0].Perks == 'd') perks = 'Double Egg';
    if (items[0].Perks == 't') perks = 'Triple Egg';
    
    const space = (items[0].Inventory == '') ? 0 : items[0].Inventory.split(', ').length;
    const vouches = (items[0].Vouches == '') ? 0 : items[0].Vouches.split(', ').length;
  
    try {
      let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}'s Inventory`, message.author.displayAvatarURL)
      .setColor('#9c13f7')
      .setDescription(items[0].Inventory.split(', ').join(""))
      .addField('Eggs Opened', `:egg: ${items[0].Eggs}`, true)
      .addField('Space', `:package: ${space}/50`, true)
      .addField('Gems', `<:Gem:592857805380255745> ${items[0].Gems}`, true)
      .addField('Perks', `:arrow_up: ${perks}`, true)
      .addBlankField(true)
      .addField('Vouches', `:ballot_box_with_check: ${vouches}`, true)
      .setFooter(bot.user.username)
      .setTimestamp()
    
      message.channel.send(embed)
    } catch (error) {
      message.channel.send(`You have too many pets! (${items[0].Eggs})`)
    }
  
  })
  

}

module.exports.help = {
  name: "inventory"
}