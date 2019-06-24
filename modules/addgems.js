const fs = require('fs');
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

function addgems(gems, tag) {
  db.all(`SELECT * FROM Users WHERE Tag = '${tag}'`, (err, items) => {
    let Gems = items[0].Gems;
    let newGems = parseInt(Gems) + gems;
    db.run(`UPDATE Users SET Gems = '${newGems}' WHERE Tag = '${tag}'`);
  })
}

exports.addgems = addgems;
