'use strict';

const { readFile } = require('fs').promises;

const sqlite3 = require('sqlite3').verbose();

const database = new sqlite3.Database('./server/database/database.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

const files = {
  tables: './server/database/tables.sql',
  data: './server/database/data.sql',
};

const options = {
  encoding: 'utf8',
};

const init = async () => {
  console.log('Database initialization started...');
  const onResult = (res, err) => console.log(res, err);
  const tablesInput = await readFile(files.tables, options);
  const tables = tablesInput
    .replace(/(\r\n|\n|\r)/gm, '')
    .split(';')
    .filter(entry => entry.length > 0);
  for (const table of tables) {
    database.run(table, onResult);
  }
  console.log('Database initialization finished...');
};

const fill = async () => {
  console.log('Database filling started...');
  const onResult = (res, err) => console.log(res, err);
  const dataInput = await readFile(files.data, options);
  const data = dataInput
    .replace(/(\r\n|\n|\r)/gm, '')
    .split(';')
    .filter(entry => entry.length > 0);
  for (const entry of data) {
    database.run(entry, onResult);
  }
  console.log('Database filling finished...');
};

module.exports = {
  database,
  init,
  fill,
};
