'use strict'
const express = require('express');
const sqlite = require('sqlite')
const bodyParser = require('body-parser');

const app = express();
const static_root = "app";
const port = process.env.PORT || 80;

app.use(express.static(static_root));

app.listen(port, () => {
  console.log('Http server started');
});

//подключаем модуль sqlite3
const sqlite3 = require('sqlite3').verbose();

//создаем базу данных

let db = new sqlite3.Database('/database/database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, login TEXT, password INTEGER)");

  db.each(`SELECT PlaylistId as id,
                  Name as name
           FROM playlists`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    // console.log(row.login + "\t" + row.password);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
