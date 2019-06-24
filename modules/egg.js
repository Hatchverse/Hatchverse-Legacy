const probability = require('./probability.js');
const fs = module.require("fs")
const dbFile = './.data/hatchverse6.db';
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

function beginner_egg(message) {
  const egg = new probability({
    p: '100%',
    f: () => {
      db.all(`SELECT * FROM Users WHERE Tag = '${message.author.id}'`, (err, items) => {
        console.log(items);
      })
    }
  })
  return egg();
}

module.exports.beginner_egg = beginner_egg;