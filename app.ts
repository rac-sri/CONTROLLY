"use strict";

import router from "./routes/routes";
import entries from "./controllers/entries";

const express = require("express"),
  body_parser = require("body-parser"),
  helmet = require("helmet"),
  log = require("morgan"),
  app = express();

//middlewares
app.use(body_parser.json());
app.use(helmet());
// app.use(log());

//routes
app.get("/entries", entries);
app.use("/webhook", router);

// app.use(error);
module.exports = app;
