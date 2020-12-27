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

//подключаю модуль sqlite3 + fs
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

//считываю sql-файл и парсю как строку
const dataSql = fs.readFileSync('./database/database.sql').toString();
// разделаю по точке с запятой
const dataArr = dataSql.toString().split(');');

//создаю базу данных
let db = new sqlite3.Database('./database/database.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

db.serialize(() => {
  db.run("PRAGMA foreign_keys=ON;");

  db.run('BEGIN TRANSACTION;');
  // Loop through the `dataArr` and db.run each query
    console.log('lol1');
    dataArr.forEach((query) => {
    if(query) {
      query += ');';
      db.run(query, (err) => {
         if(err) throw err;
      });
    }
  });

  console.log('lol2');
  db.run('COMMIT;');
});
  // создаем таблицу
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

// закрываем подключение к БД
  db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});