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
var sqlite3 = require('sqlite3').verbose();

//создаем базу данных
var db = new sqlite3.Database('users.db');

db.serialize(function() {
  //создаем таблицу
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, login TEXT, password INTEGER)")

  var stmt = db.prepare("INSERT INTO users (login, password) VALUES ('example@gmail.com', '1234567890')");
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM users", function (err, row) {
    console.log(row.id + ": " + row.info);
  });
});

//закрывае подключение к БД
db.close();
