'use strict';

const { promisify } = require('util');
const database = require('./database').getConnection();

const UserQueries = {};

UserQueries.add = async (user) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO users(login, pass) Values('${user.login}', '${user.pass}')`);
};

UserQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
    (`SELECT * FROM users WHERE id=${id}`);
};

UserQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT * FROM users');
};

UserQueries.update = async (id, user) => {
  return await promisify(database.run.bind(database))
    (`UPDATE users SET login='${user.login}', pass='${user.pass}' WHERE id=${id}`);
};

UserQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM users WHERE id=${id}`);
};

const ProductQueries = {};

ProductQueries.add = async (product) => {
  // return await promisify(database.run.bind(database))
  //  (`INSERT INTO users(login, pass) Values('${user.login}', '${user.pass}')`);
};

ProductQueries.getOne = async (id) => {
  // return await promisify(database.get.bind(database))
  //  (`SELECT * FROM users WHERE id=${id}`);
};

ProductQueries.getAll = async () => {
  // return await promisify(database.all.bind(database)) 
  //  ('SELECT * FROM users');
};

ProductQueries.update = async (id, product) => {
  // return await promisify(database.run.bind(database))
  //  (`UPDATE users SET login='${user.login}', pass='${user.pass}' WHERE id=${id}`);
};

ProductQueries.delete = async (id) => {
  // return await promisify(database.run.bind(database))
  //  (`DELETE FROM users WHERE id=${id}`);
};

const StudentQueries = {};

StudentQueries.add = async (student) => {
  // return await promisify(database.run.bind(database))
  //  (`INSERT INTO users(login, pass) Values('${user.login}', '${user.pass}')`);
};

StudentQueries.getOne = async (id) => {
  // return await promisify(database.get.bind(database))
  //  (`SELECT * FROM users WHERE id=${id}`);
};

StudentQueries.getAll = async () => {
  // return await promisify(database.all.bind(database)) 
  //  ('SELECT * FROM users');
};

StudentQueries.update = async (id, student) => {
  // return await promisify(database.run.bind(database))
  //  (`UPDATE users SET login='${user.login}', pass='${user.pass}' WHERE id=${id}`);
};

StudentQueries.delete = async (id) => {
  // return await promisify(database.run.bind(database))
  //  (`DELETE FROM users WHERE id=${id}`);
};

const CategoryQueries = {};

CategoryQueries.add = async (category) => {
  // return await promisify(database.run.bind(database))
  //  (`INSERT INTO users(login, pass) Values('${user.login}', '${user.pass}')`);
};

CategoryQueries.getOne = async (id) => {
  // return await promisify(database.get.bind(database))
  //  (`SELECT * FROM users WHERE id=${id}`);
};

CategoryQueries.getAll = async () => {
  // return await promisify(database.all.bind(database)) 
  //  ('SELECT * FROM users');
};

CategoryQueries.update = async (id, category) => {
  // return await promisify(database.run.bind(database))
  //  (`UPDATE users SET login='${user.login}', pass='${user.pass}' WHERE id=${id}`);
};

CategoryQueries.delete = async (id) => {
  // return await promisify(database.run.bind(database))
  //  (`DELETE FROM users WHERE id=${id}`);
};

const CartQueries = {};

CartQueries.add = async (cart) => {
  // return await promisify(database.run.bind(database))
  //  (`INSERT INTO users(login, pass) Values('${user.login}', '${user.pass}')`);
};

CartQueries.getOne = async (id) => {
  // return await promisify(database.get.bind(database))
  //  (`SELECT * FROM users WHERE id=${id}`);
};

CartQueries.getAll = async () => {
  // return await promisify(database.all.bind(database)) 
  //  ('SELECT * FROM users');
};

CartQueries.update = async (id, cart) => {
  // return await promisify(database.run.bind(database))
  //  (`UPDATE users SET login='${user.login}', pass='${user.pass}' WHERE id=${id}`);
};

CartQueries.delete = async (id) => {
  // return await promisify(database.run.bind(database))
  //  (`DELETE FROM users WHERE id=${id}`);
};

module.exports = {
  UserQueries,
  ProductQueries,
  StudentQueries,
  CategoryQueries,
  CartQueries,
};
