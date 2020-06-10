"use strict";

import router from "./routes/routes.ts";

const express = require("express"),
  body_parser = require("body-parser"),
  helmet = require("helmet"),
  log = require("morgan"),
  app = express();

//middlewares
app.use(body_parser.json());
app.use(helmet());
app.use(log());

//routes
app.use("/webhook", router);

// app.use(error);
module.exports = app;
