'use strict';

const { promisify } = require('util');
let database;

const UserQueries = {};
const ProductQueries = {};
const StudentQueries = {};
const CategoryQueries = {};
const CartQueries = {};

const init = () => {
  database = require('./database').getConnection();
  return {
    UserQueries,
    ProductQueries,
    StudentQueries,
    CategoryQueries,
    CartQueries,
  };
};

UserQueries.add = async (user) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO users(login, pass) Values('${user.login}', '${user.pass}')`);
};

UserQueries.getOne = async (id) => {
  console.log(database);
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

ProductQueries.add = async (product) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO products(name, img_src, price, category_id) Values('${product.name}', '${product.img}', '${product.price}', ${product.category})`);
};

ProductQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
    (`SELECT * FROM products WHERE id=${id}`);
};

ProductQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT * FROM products');
};

ProductQueries.update = async (id, product) => {
  return await promisify(database.run.bind(database))
    (`UPDATE products SET name='${product.name}', img_src='${product.img}', price='${product.price}', category_id=${product.category} WHERE id=${id}`);
};

ProductQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM products WHERE id=${id}`);
};

StudentQueries.add = async (student) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO students(name) Values('${student.name}')`);
};

StudentQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
    (`SELECT * FROM students WHERE id=${id}`);
};

StudentQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT * FROM students');
};

StudentQueries.update = async (id, student) => {
  return await promisify(database.run.bind(database))
    (`UPDATE students SET name='${student.name}' WHERE id=${id}`);
};

StudentQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM students WHERE id=${id}`);
};

CategoryQueries.add = async (category) => {
  return await promisify(database.run.bind(database))
   (`INSERT INTO category(name) Values('${category.name}')`);
};

CategoryQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
   (`SELECT * FROM category WHERE id=${id}`);
};

CategoryQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
   ('SELECT * FROM category');
};

CategoryQueries.update = async (id, category) => {
  return await promisify(database.run.bind(database))
    (`UPDATE category SET name='${category.name}' WHERE id=${id}`);
};

CategoryQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM category WHERE id=${id}`);
};

CartQueries.add = async (cart) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO cart(user_id, product_id) Values(${cart.user}, ${cart.product})`);
};

CartQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
    (`SELECT * FROM cart WHERE id=${id}`);
};

CartQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT * FROM cart');
};

CartQueries.update = async (id, cart) => {
  return await promisify(database.run.bind(database))
    (`UPDATE cart SET user_id=${cart.user}, product_id=${cart.product} WHERE id=${id}`);
};

CartQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM cart WHERE id=${id}`);
};

module.exports = {
  init,
};
