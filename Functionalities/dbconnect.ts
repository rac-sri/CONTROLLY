import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://rachit2501:<password>@cluster0-hqjrg.mongodb.net/<dbname>?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to db"))
  .catch(() => console.log("Failed to connect"));
