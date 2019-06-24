const probability = require('./probability.js');
const config = require('../config.json');
const fs = module.require("fs")
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

function beginner_egg(message) {
  const egg = new probability({
    p: '100%',
    f: () => {
      db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
        console.log(items)
        let inventory = items[0].Inventory;
        let newinv = `${inventory}, <:Rainbow_Dogcat:592426717285449788>`;
        db.run(`UPDATE Users SET Inventory = '${newinv}' WHERE Tag = '${message.author.id}'`);
        message.channel.send('You hatched a <:Rainbow_Dogcat:592426717285449788>')
      })
    }
  })
  return egg();
}

module.exports.beginner_egg = beginner_egg;