const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  //If statments
  if(!message.content.startsWith(config.prefix)) return;
  if(!message.mentions.users.first() && bot.users.get(args[0]).id) return message.channel.send('`Syntax Error:` ()lookup **<mention user>**');
  
  const userid = message.mentions.users.first().id || args[0];

  
  db.all(`SELECT * FROM Users WHERE Tag = ${userid}`, (err, items) => {
    if (items.length == 0) return message.channel.send(`\`Error:\` ${message.mentions.users.first()} has no **stats**!`);
    
    //DB consts
    const gems = items[0].Gems;
    const inventory = items[0].Inventory;
    const eggs = items[0].Eggs;
    
    //Stats if statments
    const pets = (inventory == '') ? 0 : inventory.split(', ').length;
    const vouches = (items[0].Vouches == '') ? 0 : items[0].Vouches.split(', ').length;
  
    //Stats embed
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.mentions.users.first().username}'s Stats`, message.mentions.users.first().displayAvatarURL)
    .setColor('#9c13f7')
    .addField('Eggs Opened', `:egg: ${eggs}`, true)
    .addField('Gems', `<:Gem:592857805380255745> ${gems}`, true)
    .addField('Pets', `:dog: ${pets}`, true)
    .addField('Vouches', `:ballot_box_with_check: ${vouches}`, true)
    .setFooter(bot.user.username)
    .setTimestamp()
    
    message.channel.send(embed)
  })
}

module.exports.help = {
  name: "lookup"
}