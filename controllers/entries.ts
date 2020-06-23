import db from "../Functionalities/sqlsetup";

export default async (req, res) => {
  const entries = await db.get("SELECT TEXT from tbl");
  res.status(200).send(entries);
};
