DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id TEXT PRIMARY KEY,
    login TEXT,
    password TEXT,
    chosen_product SET
);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    product_id TEXT PRIMARY KEY,
    product_name TEXT,
    product_img_src TEXT,
    product_price TEXT,
    product_category TEXT
);

INSERT INTO products(product_id, product_name, product_img_src, product_price, product_category)
    Values('0', 'Банан африканський жовтенький', './app/img/fruits/banana.png', '30 грн', 'fruits')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('1', 'Яблуко українське (не польське)', './app/img/fruits/apple.png', '20 грн, 'fruits')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('2', 'Груша вищий сорт', './app/img/fruits/pear.png', '25 грн', 'fruits')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('3', 'Гранат соковитий', './app/img/fruits/pomegranate.png', '42 грн', 'fruits')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('4', 'Мандарин безкісточковий', './app/img/fruits/tangerine.png', '33 грн', 'fruits')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('5', 'Капуста дивовижна багатолисткова', './app/img/vegs/cabbage.png', '8 грн', 'vegs')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('6', 'Морква помаранчева неслухняна', './app/img/vegs/carrot.png', '10 грн', 'vegs')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('7', 'Огірок довгий такий', './app/img/vegs/cucumber.png', '15 грн', 'vegs')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('8', 'Помідор Senior', './app/img/vegs/tomato.png', '18 грн', 'vegs')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('9', 'Перець родом з Чилі', './app/img/vegs/pepper.png', '13 грн', 'vegs')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('10', 'Не лісний, а лісовий горіх', './app/img/nuts/hazelnut.png', '90 грн', 'nuts')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('11', 'Волоський горіх це той що грецький', './app/img/nuts/walnut.png', '55 грн', 'nuts')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('12', 'Каштан щоб кидати', './app/img/nuts/chestnut.png', '3 грн', 'nuts')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('13', 'Мій улюблений мигдаль', './app/img/nuts/almond.png', '120 грн', 'nuts')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('14', 'Фісташки до пива', './app/img/nuts/pistachio.png', '80 грн', 'nuts')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('15', 'Зефір не жувальний, але до какао підійде', './app/img/sweet/marshmallow.png', '70 грн', 'sweet')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('16', 'Чоколяда чорна для чорних', './app/img/sweet/dark.png', '90 грн', 'sweet')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('17', 'Чоколяда біла для білих', './app/img/sweet/white.png', '85 грн', 'sweet')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('18', 'Чоколяда молочна солоденька', './app/img/sweet/milk.png', '75 грн', 'sweet')

INSERT INTO products(product_id, product_name, product_img_src, product_price)
    Values('19', 'Варення бабусине звичайне', './app/img/sweet/jam.png', '100 грн', 'sweet')

DROP TABLE IF EXISTS students;
CREATE TABLE students (
    student_name TEXT
)

INSERT INTO students(product_name)
    Values('Бартосевич Володимир')

INSERT INTO students(product_name)
    Values('Беспалий Ілля')

INSERT INTO students(product_name)
    Values('Бокій Артем')

INSERT INTO students(product_name)
    Values('Боднік Кирило')

INSERT INTO students(product_name)
    Values('Бублик Єгор')

INSERT INTO students(product_name)
    Values('Вахтіна Єва')

INSERT INTO students(product_name)
    Values('Голік Владислав')

INSERT INTO students(product_name)
    Values('Головенко Олександр')

INSERT INTO students(product_name)
    Values('Долгова Єлизовета')

INSERT INTO students(product_name)
    Values('Іванченко Георгій')

INSERT INTO students(product_name)
    Values('Королюк Ярослав')

INSERT INTO students(product_name)
    Values('Лазоренко Нікіта')

INSERT INTO students(product_name)
    Values('Литвишко Нікіта')

INSERT INTO students(product_name)
    Values('Макарицький Олег')

INSERT INTO students(product_name)
    Values('Матюха Кирило')

INSERT INTO students(product_name)
    Values('Перевалов Максим')

INSERT INTO students(product_name)
    Values('Пєнський Володимир')

INSERT INTO students(product_name)
    Values('Рекечинський Дмитр')

INSERT INTO students(product_name)
    Values('Рудник Микола')

INSERT INTO students(product_name)
    Values('Сумський Павло')

INSERT INTO students(product_name)
    Values('Ткаченко Юлія')

INSERT INTO students(product_name)
    Values('Третяк Владислав')

INSERT INTO students(product_name)
    Values('Цасюк Ілля')