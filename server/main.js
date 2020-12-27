'use strict'

const express = require('express');
const database = require('./database');

const app = express();
const port = process.env.PORT || 80;

const start = async () => {
  app.listen(port, () => {
    console.log('Http server started');
  });
  await database.init();
  await database.fill();
};

module.exports = {
  start,
};
