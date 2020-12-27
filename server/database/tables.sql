DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    login TEXT,
    pass TEXT
);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    img_src TEXT,
    price TEXT,
    category_id INTEGER,
    FOREIGN KEY(category_id) REFERENCES category(id)
);

DROP TABLE IF EXISTS students;
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    student_name TEXT
);

DROP TABLE IF EXISTS category;
CREATE TABLE category (
    id INTEGER PRIMARY KEY,
    name TEXT
);

DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
    id INTEGER PRIMARY KEY,
    user_id TEXT,
    product_id TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);
