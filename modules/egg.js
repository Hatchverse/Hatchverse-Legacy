const probability = require('./probability.js');
const fs = module.require("fs")
const dbFile = './.data/1234.db';
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

function beginner_egg(message) {
  const egg = new probability({
    p: '100%',
    f: () => {
      let item = db.all(`SELECT Inventory FROM Users WHERE Tag = ${message.author.id}`, (err, items) => { item = items });
      const inventorynew = item + "<:Rainbow_Dogcat:592426717285449788>";
      db.run(`UPDATE Users SET Inventory = '${inventorynew}' WHERE Tag = '${message.author.id}'`)//<:Rainbow_Dogcat:592426717285449788>

      message.channel.send("got <:Rainbow_Dogcat:592426717285449788>")    }
  })
  
  return egg();
}

module.exports.beginner_egg = beginner_egg;