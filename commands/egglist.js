const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
    //DB const
    const eggs = parseInt(items[0].Eggs);
    
    //If's for unlock emoji
    const beginneregg = eggs >= 0 ? ':unlock:' : ':lock:';
    const spottedegg = eggs >= 50 ? ':unlock:' : ':lock:';
    const iceshardegg = eggs >= 200 ? ':unlock:' : ':lock:';
    const spikeyegg = eggs >= 500 ? ':unlock:' : ':lock:';
    const slimeyegg = eggs >= 1500 ? ':unlock:' : ':lock:';
    const rainbowegg = eggs >= 3000 ? ':unlock:' : ':lock:';
    const hackweekegg = eggs >= 100 ? ':unlock:' : ':lock:';
    
    let embed = new Discord.RichEmbed()
    .setAuthor('Eggs', bot.user.displayAvatarURL)
    .setColor('#9c13f7')
    .setDescription(`${beginneregg}-<:Beginner_Egg:592440252979871745> Beginner Egg - :egg: **0**\n${spottedegg}-<:Spotted_Egg:592446342228606976> Spotted Egg - :egg: **50**\n${iceshardegg}-<:Ice_Shard_Egg:592447966023778325> Ice Shard Egg - :egg: **200**\n${spikeyegg}-<:Spikey_Egg:592443923998441475> Spikey Egg - :egg: **500**\n${slimeyegg}-<:SlimeyEgg:592424933217271809> Slimey Egg - :egg: **1500**\n${rainbowegg}-<:Rainbow_Egg:592425391004844032> Rainbow Egg - :egg: **3000**`)
    .addField('Event Eggs', `${hackweekegg}-<:HackWeekEgg:591827213570277385> Hack Week Egg - :egg: **100**`)
    .setFooter(bot.user.username)
    .setTimestamp()
  
    message.channel.send(embed)
    
  })
}

module.exports.help = {
  name: "eggs"
}