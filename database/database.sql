DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id TEXT PRIMARY KEY,
    login TEXT,
    pass TEXT
);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id TEXT PRIMARY KEY,
    name TEXT,
    img_src TEXT,
    price TEXT,
    category_id TEXT
);


INSERT INTO products(id, name, img_src, price, category_id)
    Values('0', 'Банан африканський жовтенький', './app/img/fruits/banana.png', '30 грн', 'c1');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('1', 'Яблуко українське (не польське)', './app/img/fruits/apple.png', '20 грн', 'c1');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('2', 'Груша вищий сорт', './app/img/fruits/pear.png', '25 грн', 'c1');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('3', 'Гранат соковитий', './app/img/fruits/pomegranate.png', '42 грн', 'c1');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('4', 'Мандарин безкісточковий', './app/img/fruits/tangerine.png', '33 грн', 'c1');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('5', 'Капуста дивовижна багатолисткова', './app/img/vegs/cabbage.png', '8 грн', 'c2');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('6', 'Морква помаранчева неслухняна', './app/img/vegs/carrot.png', '10 грн', 'c2');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('7', 'Огірок довгий такий', './app/img/vegs/cucumber.png', '15 грн', 'c2');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('8', 'Помідор Senior', './app/img/vegs/tomato.png', '18 грн', 'c2');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('9', 'Перець родом з Чилі', './app/img/vegs/pepper.png', '13 грн', 'c2');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('10', 'Не лісний, а лісовий горіх', './app/img/nuts/hazelnut.png', '90 грн', 'c3');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('11', 'Волоський горіх це той що грецький', './app/img/nuts/walnut.png', '55 грн', 'c3');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('12', 'Каштан щоб кидати', './app/img/nuts/chestnut.png', '3 грн', 'c3');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('13', 'Мій улюблений мигдаль', './app/img/nuts/almond.png', '120 грн', 'c3');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('14', 'Фісташки до пива', './app/img/nuts/pistachio.png', '80 грн', 'c3');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('15', 'Зефір не жувальний, але до какао підійде', './app/img/sweet/marshmallow.png', '70 грн', 'c4');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('16', 'Чоколяда чорна для чорних', './app/img/sweet/dark.png', '90 грн', 'c4');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('17', 'Чоколяда біла для білих', './app/img/sweet/white.png', '85 грн', 'c4');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('18', 'Чоколяда молочна солоденька', './app/img/sweet/milk.png', '75 грн', 'c4');

INSERT INTO products(id, name, img_src, price, category_id)
    Values('19', 'Варення бабусине звичайне', './app/img/sweet/jam.png', '100 грн', 'c4');

DROP TABLE IF EXISTS students;
CREATE TABLE students (
    student_name TEXT
);

INSERT INTO students(student_name)
    Values('Бартосевич Володимир');

INSERT INTO students(student_name)
    Values('Беспалий Ілля');

INSERT INTO students(student_name)
    Values('Бокій Артем');

INSERT INTO students(student_name)
    Values('Боднік Кирило');

INSERT INTO students(student_name)
    Values('Бублик Єгор');

INSERT INTO students(student_name)
    Values('Вахтіна Єва');

INSERT INTO students(student_name)
    Values('Голік Владислав');

INSERT INTO students(student_name)
    Values('Головенко Олександр');

INSERT INTO students(student_name)
    Values('Долгова Єлизовета');

INSERT INTO students(student_name)
    Values('Іванченко Георгій');

INSERT INTO students(student_name)
    Values('Королюк Ярослав');

INSERT INTO students(student_name)
    Values('Лазоренко Нікіта');

INSERT INTO students(student_name)
    Values('Литвишко Нікіта');

INSERT INTO students(student_name)
    Values('Макарицький Олег');

INSERT INTO students(student_name)
    Values('Матюха Кирило');

INSERT INTO students(student_name)
    Values('Перевалов Максим');

INSERT INTO students(student_name)
    Values('Пєнський Володимир');

INSERT INTO students(student_name)
    Values('Рекечинський Дмитр');

INSERT INTO students(student_name)
    Values('Рудник Микола');

INSERT INTO students(student_name)
    Values('Сумський Павло');

INSERT INTO students(student_name)
    Values('Ткаченко Юлія');

INSERT INTO students(student_name)
    Values('Третяк Владислав');

INSERT INTO students(student_name)
    Values('Цасюк Ілля');

DROP TABLE IF EXISTS category;
CREATE TABLE category (
    category_id TEXT PRIMARY KEY,
    category_name TEXT
);

INSERT INTO category(category_id, category_name)
    Values('c1', 'fruits');

INSERT INTO category(category_id, category_name)
    Values('c2', 'vegs');

INSERT INTO category(category_id, category_name)
    Values('c3', 'nuts');

INSERT INTO category(category_id, category_name)
    Values('c4', 'sweet');

DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
    user_id TEXT PRIMARY KEY,
    product_id TEXT
);


