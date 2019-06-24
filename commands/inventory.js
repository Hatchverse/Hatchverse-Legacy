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
    if(items == '') return message.channel.send('You have no pets! Use `()open Beginner Egg` to get started')
  
    try {
      let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}'s Inventory`, message.author.displayAvatarURL)
      .setColor('#9c13f7')
      .setDescription(items[0].Inventory.split(', ').join(""))
      .addField('Eggs Opened', items[0].Eggs, true)
      .addBlankField(true)
      .addField('Space', `${items[0].Inventory.split(', ').length - 1}/50`, true)
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