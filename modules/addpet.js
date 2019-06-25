const fs = require('fs');
const dbFile = global.db;
const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);

function addpet(name, tag) {
  db.all(`SELECT * FROM Users WHERE Tag = '${tag}'`, (err, items) => {
    let inventory = items[0].Inventory;
    let eggsopened = parseInt(items[0].Eggs) + 1;
    let newinv;
    if (items) {
      newinv = `${inventory}, ${name}`;
    }
    console.log(items.length)
    if(items.length == 1) {
      newinv = name
    }
    db.run(`UPDATE Users SET Inventory = '${newinv}' WHERE Tag = '${tag}'`);
    db.run(`UPDATE Users SET Eggs = '${eggsopened}' WHERE Tag = '${tag}'`);
  })
}

exports.addpet = addpet;
