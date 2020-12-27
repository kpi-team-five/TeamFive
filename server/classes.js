'use strict'

class User {

  constructor(id, login, pass) {
    this.id = id;
    this.login = login;
    this.pass = pass;
  }

}

class Product {

  constructor(id, name, img, price, category) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.category = category;
  }

}

class Student {

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

}

class Category {
  
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

}

class Cart {

  constructor(id, user, product) {
    this.id = id;
    this.user = user;
    this.product = product;
  }

}

module.exports = {
  User,
  Product,
  Student,
  Category,
  Cart,
};
