const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  if(!message.mentions.users.first()) return message.channel.send('Please mention a **user**!');
  const mention = message.mentions.users.first();
  db.all(`SELECT Inventory FROM Users WHERE Tag = '${message.author.id}'`, (err, sender) => {
    db.all(`SELECT Inventory FROM Users WHERE Tag = '${mention.id}'`, (err, receiver) => {
    // ()trade @whatehrerh :doggy: :kitty:
      const senderInv = sender[0].Inventory.split(', ');
      const receiverInv = receiver[0].Inventory.split(', ');
      
      const senderId = message.author.id;
      const receiverId = mention.id;
      
      const sendPet = args.slice(1).join('_');
      const sendReg = new RegExp(sendPet);
      const senderOwn = senderInv.filter(pet => pet.match(sendReg))
      
      if(senderOwn.length == 0) return message.channel.send(`You don't own **${sendPet}**`);
      
      message.channel.send('You receive?').then(() => {
        message.channel.awaitMessages(response => message.content, { max: 1, time: 10000, errors: ['time'] })
          .then((collected) => {
            const collectedArgs = collected.first().content.split(" ");
            const receivePet = collectedArgs.join("_");
            const receiveReg = new RegExp(receivePet);
            const receiverOwn = receiverInv.filter(pet => pet.match(receiveReg));
          
            if(receiverOwn.length == 0) return message.channel.send(`${mention} does not own **${receivePet}**`);
            
            let senttraderequest = new Discord.RichEmbed()
            .setAuthor('Trade', message.author.displayAvatarURL)
            .setDescription(`Sent Trade Request to ${mention}`)
            .addField('You give', senderOwn[0], true)
            .addField('You receive', receiverOwn[0], true)
            .setColor('#9c13f7')
            .setFooter(bot.user.username)
            .setTimestamp()
            
            message.channel.send(senttraderequest)
          
            let incomingtrade = new Discord.RichEmbed()
            .setAuthor('Trade', message.author.displayAvatarURL)
            .setDescription(`Incoming Trade Request from <@${message.author.id}>`) // stop cursing this a christian server
            .addField('You give', receiverOwn[0], true)
            .addField('You receive', senderOwn[0], true)
            .setColor('#9c13f7')
            .setFooter('React with ✅ to accept or ❌ to decline')
            .setTimestamp()
            
            mention.send(incomingtrade)
            .then((message) => {
              message.react('✅').then(() => message.react("❌"))
              message.awaitReactions(filter, {max: 1, time: 10000, errors: ['time'] })
              .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name == "✅") {
                  // we need to update the inventory arrays and then upload them to the Database.
                  const senderNewInv = remove(senderInv, senderOwn[0]);
                  const recieverNewInv = remove(receiverInv, receiverOwn[0])
                  
                  db.run("UPDATE Users SET Inventory = ? WHERE Tag = ?", senderNewInv, senderId)
                } else {
                  return;
                }
              })
            })
          
            const filter = (reaction, user) => {
              return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
            }
            
          })
        })
      })
  })
}

function remove(array, search) {
  let index = array.indexOf(search);
  if (index !== -1) {
    array.splice(index, 1);
  }
  
  return array;
}

module.exports.help = {
  name: "trade"
}