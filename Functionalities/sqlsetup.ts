const sqlite3 = require("sqlite3");
// const {open} = require("sqlite");
var db = new sqlite3.Database("controlly");

sqlite3.verbose();
db.serialize(() => {
  try {
    db.run("CREATE TABLE IF NOT EXISTS cont (TEXT VARCHAR(1000) NOT NULL)");
  } catch (e) {
    console.log(e);
  }
});

export default db;
