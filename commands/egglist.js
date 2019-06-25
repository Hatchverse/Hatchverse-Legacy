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
    const eggs = parseInt(items[0].Eggs);
    const beginneregg = eggs >= 0 ? ':unlock:' : ':lock:';
    const spottedegg = eggs >= 25 ? ':unlock:' : ':lock:';
    const iceshardegg = eggs >= 75 ? ':unlock:' : ':lock:';
    const spikeyegg = eggs >= 135 ? ':unlock:' : ':lock:';
    const slimeyegg = eggs >= 200 ? ':unlock:' : ':lock:';
    const rainbowegg = eggs >= 300 ? ':unlock:' : ':lock:';
    const hackweekegg = eggs >= 50 ? ':unlock:' : ':lock:';//go ahead and add the un added eggs so we dont have to do it later
    
    let embed = new Discord.RichEmbed()
    .setAuthor('Eggs', bot.user.displayAvatarURL)
    .setColor('#9c13f7')
    .setDescription(`${beginneregg}-<:Beginner_Egg:592440252979871745> Beginner Egg - :egg: **0**\n${spottedegg}-<:Spotted_Egg:592446342228606976> Spotted Egg - :egg: **25**\n${iceshardegg}-<:Ice_Shard_Egg:592447966023778325> Ice Shard Egg - :egg:**75**\n`)
    .setFooter(bot.user.username)
    .setTimestamp()
    
    message.channel.send(embed)
    
  })
}

module.exports.help = {
  name: "eggs"
}