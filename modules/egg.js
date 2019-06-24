const probability = require('./probability.js');
const fs = module.require("fs")
const dbFile = './.data/poop.db';
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

function beginner_egg(message) {
  const egg = new probability({
    p: '100%',
    f: () => {

    }
  })
  return egg();
}

module.exports.beginner_egg = beginner_egg;