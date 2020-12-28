'use strict'

const { User, Product, Student, Category, Cart } = require('./classes');
const { init } = require('./queries');

let Queries = null;

const start = app => {
  Queries = init();
  
  /* users */
  app.post('/users', async (req, res) => {
    const body = req.body;
    const user = new User(null, body.login, body.pass);
    const result = await Queries.UserQueries.add(user);
    return res.send(result);
  });

  app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.UserQueries.getOne(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/users', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.UserQueries.getAll(id);
    return res.send(JSON.stringify(result));
  });

  app.put('/users', async (req, res) => {
    const body = req.body;
    const user = new User(null, body.login, body.pass);
    const result = await Queries.UserQueries.update(body.id, user);
    return res.send(result);
  });

  app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.UserQueries.delete(id);
    return res.send(result);
  });

  /* products */
  app.post('/products', async (req, res) => {
    const body = req.body;
    const product = new Product(null, body.name, body.img, body.price, body.category);
    const result = await Queries.ProductQueries.add(product);
    return res.send(result);
  });

  app.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.ProductQueries.getOne(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/products', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.ProductQueries.getAll(id);
    return res.send(JSON.stringify(result));
  });

  app.put('/products/', async (req, res) => {
    const body = req.body;
    const product = new Product(null, body.name, body.img, body.price, body.category);
    const result = await Queries.ProductQueries.update(body.id, product);
    return res.send(result);
  });

  app.delete('/products/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.ProductQueries.delete(id);
    return res.send(result);
  });

  /* students */
  app.post('/students', async (req, res) => {
    const body = req.body;
    const student = new Student(null, body.name);
    const result = await Queries.StudentQueries.add(student);
    return res.send(result);
  });

  app.get('/students/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.StudentQueries.getOne(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/students', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.StudentQueries.getAll(id);
    return res.send(JSON.stringify(result));
  });

  app.put('/students', async (req, res) => {
    const body = req.body;
    const student = new Student(null, body.name);
    const result = await Queries.StudentQueries.update(body.id, student);
    return res.send(result);
  });

  app.delete('/students/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.StudentQueries.delete(id);
    return res.send(result);
  });

  /* categories */
  app.post('/categories', async (req, res) => {
    const body = req.body;
    const category = new Category(null, body.name);
    const result = await Queries.CategoryQueries.add(category);
    return res.send(result);
  });

  app.get('/categories/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.CategoryQueries.getOne(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/categories', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.CategoryQueries.getAll(id);
    return res.send(JSON.stringify(result));
  });

  app.put('/categories', async (req, res) => {
    const body = req.body;
    const category = new Category(null, body.name);
    const result = await Queries.CategoryQueries.update(body.id, category);
    return res.send(result);
  });

  app.delete('/categories/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.CategoryQueries.delete(id);
    return res.send(result);
  });

  /* cart */
  app.post('/cart', async (req, res) => {
    const body = req.body;
    console.log(body);
    const cart = new Cart(null, body.user, body.product);
    const result = await Queries.CartQueries.add(cart);
    return res.send(result);
  });

  app.get('/cart/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.CartQueries.getOne(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/cart', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.CartQueries.getAll(id);
    return res.send(JSON.stringify(result));
  });

  app.put('/cart', async (req, res) => {
    const body = req.body;
    const cart = new Cart(null, body.user, body.product);
    const result = await Queries.CartQueries.update(body.id, cart);
    return res.send(result);
  });

  app.delete('/cart/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.CartQueries.delete(id);
    return res.send(result);
  });

};

module.exports = {
  start,
};
