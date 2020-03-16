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
    const spottedegg = eggs >= 100 ? ':unlock:' : ':lock:';
    const iceshardegg = eggs >= 400 ? ':unlock:' : ':lock:';
    const spikeyegg = eggs >= 1275 ? ':unlock:' : ':lock:';
    const slimeyegg = eggs >= 4000 ? ':unlock:' : ':lock:';
    const rainbowegg = eggs >= 8250 ? ':unlock:' : ':lock:';
    const goldenegg = eggs >= 14500 ? ':unlock:' : ':lock:';
    const dominusegg = eggs >= 18000 ? ':unlock:' : ':lock:';
    
    let embed = new Discord.MessageEmbed()
    .setAuthor('Eggs', bot.user.displayAvatarURL)
    .setColor('#9c13f7')
    .setDescription(`${beginneregg}-<:Beginner_Egg:592440252979871745> Beginner Egg - :egg: **0**\n${spottedegg}-<:Spotted_Egg:592446342228606976> Spotted Egg - :egg: **100**\n${iceshardegg}-<:Ice_Shard_Egg:592447966023778325> Ice Shard Egg - :egg: **400**\n${spikeyegg}-<:Spikey_Egg:592443923998441475> Spikey Egg - :egg: **1275**\n${slimeyegg}-<:SlimeyEgg:592424933217271809> Slimey Egg - :egg: **4000**\n${rainbowegg}-<:Rainbow_Egg:592425391004844032> Rainbow Egg - :egg: **8250**\n${goldenegg}-<:Golden_Egg:595503216830185493> Golden Egg - :egg: **14500**\n${dominusegg}-<:Dominus_Egg:596175646862999574> Dominus Egg - :egg: **18000**`)
    .addField('Event Eggs', `*None*`)
    .setFooter(bot.user.username)
    .setTimestamp()
  
    message.channel.send(embed)
    
  })
}

module.exports.help = {
  name: "eggs"
}