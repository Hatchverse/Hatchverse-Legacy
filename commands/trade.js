const Discord = require('discord.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(config.prefix)) return;
  
  //Trading if statments
  if(!message.mentions.users.first()) return message.channel.send('`Syntax Error:` ()trade **<mention user>** <pet name to give>');
  if(message.mentions.users.first().id == message.author.id) return message.channel.send("`Error:` You can not trade **yourself**!");
  if(!args[1]) return message.channel.send('`Syntax Error:` ()trade <mention user> **<pet name to give>**');

  //Mention const
  const mentions = message.mentions.users.first();

  //DB
  db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, sinv) => {
    db.all(`SELECT * FROM Users WHERE Tag = '${mentions.id}'`, (err, rinv) => {
      //Trading if statments
      if(sinv[0].TradePending == true) return message.channel.send('`Error:` You already have a trade **pending**!');
      if (sinv[0].Inventory.length == 0) return message.channel.send('`Error:` You have no **pets** to trade!')
      if (rinv[0].Inventory.length == 0) return message.channel.send(`\`Error:\` ${mentions} has no **pets** to trade!`)
      
      //Consts
      const sender = sinv[0].Inventory.split(', ');
      const senderId = message.author.id;
      const senderSend = message.author;
      const receiver = rinv[0].Inventory.split(', ');
      const receiverId = mentions.id;
      
      const sendReg = new RegExp(args.slice(1).join("_"), 'i')
      const senderOwn = sender.filter(pet => pet.match(sendReg))

      if(senderOwn.length == 0) return message.channel.send(`\`Error:\` You don't own a **${args.slice(1).join(" ")}**`);
      
      let receiveEmbed = new Discord.RichEmbed()
        .setAuthor('Trade', message.author.displayAvatarURL)
        .setDescription(`You receive? Reply with a **Pet Name** in ${mentions} inventory...`)
        .addField('You give', senderOwn[0], true)
        .addField('You receive', ':grey_question:', true)
        .setColor('#9c13f7')
        .setFooter(bot.user.username)
        .setTimestamp()
      
      let editMsg;
      message.channel.send(receiveEmbed).then(m => { m.delete(10000); editMsg = m });
      
      const filter = m => m.author.id === message.author.id;
      message.channel.awaitMessages(filter, { max: 1, time: 10000}).then(async (collected) => {
        //If statment
        if(typeof collected == 'undefined') return;
        const collectedArgs = collected.first().content.split(" ");
        
        const receiveReg = new RegExp(collectedArgs.join("_"), 'i');
        const receiverOwn = receiver.filter(pet => pet.match(receiveReg));
        
        //If does not own return
        if(receiverOwn.length == 0) return message.channel.send(`\`Error:\` ${mentions} does not own a **${collectedArgs.join(" ")}**`);
        
        //Sent request embed
        let senttraderequest = new Discord.RichEmbed()
        .setAuthor('Trade', message.author.displayAvatarURL)
        .setDescription(`Sent Trade Request to ${mentions}`)
        .addField('You give', senderOwn[0], true)
        .addField('You receive', receiverOwn[0], true)
        .setColor('#9c13f7')
        .setFooter(bot.user.username)
        .setTimestamp()
        
        //Incoming trade embed
        let incomingtrade = new Discord.RichEmbed()
        .setAuthor('Trade', message.author.displayAvatarURL)
        .setDescription(`Incoming Trade Request from <@${message.author.id}>`)
        .addField('You give', receiverOwn[0], true)
        .addField('You receive', senderOwn[0], true)
        .setColor('#9c13f7')
        .setFooter('React with ✅ to accept or ❌ to decline')
        .setTimestamp()
        
        //Try to send message, if dms closed return
        try {
        await mentions.send(incomingtrade).then((message) => {
          message.react('✅');
          message.react('❌');
          
          const filter = (reaction, user) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === mentions.id;
          }
          
          db.run("UPDATE Users SET TradePending = ? WHERE Tag = ?", true, senderId);
          
          message.awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] }).then((collected) => {
            if (typeof collected == 'undefined') return;
            const reaction = collected.first();
            if(reaction.emoji.name == '✅') {
              const sendRemove = remove(sender, senderOwn[0]);
              const senderNewInv = sendRemove.push(receiverOwn[0]);
              db.run("UPDATE Users SET Inventory = ? WHERE Tag = ?", sendRemove.join(', '), senderId)
              
              const receiverRemove = remove(receiver, receiverOwn[0]);
              const receiverNewInv = receiverRemove.push(senderOwn[0]);
              db.run("UPDATE Users SET Inventory = ? WHERE Tag = ?", receiverRemove.join(', '), receiverId)
              
              db.run("UPDATE Users SET TradePending = ? WHERE Tag = ?", false, senderId);
              message.channel.send(':white_check_mark: **Accepted!**')
              senderSend.send(`**${mentions.tag}** has accepted your trade request!`);
            } else {
              message.channel.send(':x: **Declined!**')
              db.run("UPDATE Users SET TradePending = ? WHERE Tag = ?", false, senderId);
              senderSend.send(`**${mentions.tag}** has declined your trade request!`);
            }
          })
        })
        editMsg.edit(senttraderequest);
        } catch (error) {
          message.channel.send(`\`Error:\` ${mentions} does not have their **DMs** open!`)
        }
      })
    })
  });
}

//array remove function
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