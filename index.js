'use strict'
const express = require('express');
const sqlite = require('sqlite');
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
let db = new sqlite3.Database('./database/database.db');

// db.serialize(function() {
//   //создаем таблицу
//   db.run(`CREATE TABLE IF NOT EXISTS users(id INTEGER, login TEXT, password TEXT)`);
//   //вставляет рядок
//   db.run(`INSERT INTO users(id, login, password) VALUES(?, ?, ?)`, [0, 'user0', 'pass0'], function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//     // get the last insert id
//     console.log(`A row has been inserted with rowid ${this.lastID}`);
//   });
// });

// // закрываем подключение к БД
// db.close();
