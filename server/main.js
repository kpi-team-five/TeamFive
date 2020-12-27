'use strict'

const express = require('express');
const database = require('./database');

const app = express();
const port = process.env.PORT || 80;

const start = () => {
  database.connect(async () => {
    await database.init();
    // await database.fill();
    //
    // const queries = require('./queries');
    // console.log(await queries.UserQueries.add({ login: 'login3', pass: 'pass3' }));
    // console.log(await queries.UserQueries.getAll());
    // console.log(await queries.UserQueries.update(3, { login: 'loginNot3', pass: 'passNot3'}));
    // console.log(await queries.UserQueries.getOne(3));
    // console.log(await queries.UserQueries.delete(3));
    // console.log(await queries.UserQueries.getAll());
    //
  });
  app.listen(port, () => {
    console.log('Http server started');
  });
};

module.exports = {
  start,
};
