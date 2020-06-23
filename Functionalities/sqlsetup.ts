const sqlite3 = require("sqlite3");
const {open} = require("sqlite");

sqlite3.verbose();

const datab = async () => {
  const db = await open({
    filename: "/tmp/database.db",
    driver: sqlite3.cached.Database,
  });
  return db;
};

export default datab;
