'use strict'

const express = require('express');
const database = require('./database');

const app = express();
const port = process.env.PORT || 80;

const start = () => {
  database.connect(async () => {
    await database.init();
    await database.fill();
  });
  app.listen(port, () => {
    console.log('Http server started');
  });
};

module.exports = {
  start,
};
