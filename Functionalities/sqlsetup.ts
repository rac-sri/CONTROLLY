const sqlite3 = require("sqlite3");
const {open} = require("sqlite");

sqlite3.verbose();

const db = open({
  filename: "/tmp/database.db",
  driver: sqlite3.cached.Database,
});

db.then(async (res) => await res.exec("CREATE TABLE tbl (col TEXT)"));

export default db;
