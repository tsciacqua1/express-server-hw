"use strict";

const express = require("express");

const fs = require("fs").promises;

const routes = require("./routes");

require("dotenv").config();

require("./loaders");

const {
  PORT
} = process.env;
const port = PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use("/api", routes);

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(500).send({
    error: true,
    error: err.message
  });
};

app.use(errorHandler);
app.listen(port, () => {
  console.log(`server on port ${port}`);
});