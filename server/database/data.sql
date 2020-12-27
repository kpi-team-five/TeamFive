INSERT INTO users(id, login, pass)
    Values(1, 'login1', 'pass1');

INSERT INTO users(id, login, pass)
    Values(2, 'login2', 'pass2');

INSERT INTO products(id, name, img_src, price, category_id)
    Values(1, 'Банан африканський жовтенький', './app/img/fruits/banana.png', '30 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(2, 'Яблуко українське (не польське)', './app/img/fruits/apple.png', '20 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(3, 'Груша вищий сорт', './app/img/fruits/pear.png', '25 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(4, 'Гранат соковитий', './app/img/fruits/pomegranate.png', '42 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(5, 'Мандарин безкісточковий', './app/img/fruits/tangerine.png', '33 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(6, 'Капуста дивовижна багатолисткова', './app/img/vegs/cabbage.png', '8 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(7, 'Морква помаранчева неслухняна', './app/img/vegs/carrot.png', '10 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(8, 'Огірок довгий такий', './app/img/vegs/cucumber.png', '15 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(9, 'Помідор Senior', './app/img/vegs/tomato.png', '18 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(10, 'Перець родом з Чилі', './app/img/vegs/pepper.png', '13 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(11, 'Не лісний, а лісовий горіх', './app/img/nuts/hazelnut.png', '90 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(12, 'Волоський горіх це той що грецький', './app/img/nuts/walnut.png', '55 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(13, 'Каштан щоб кидати', './app/img/nuts/chestnut.png', '3 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(14, 'Мій улюблений мигдаль', './app/img/nuts/almond.png', '120 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(15, 'Фісташки до пива', './app/img/nuts/pistachio.png', '80 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(16, 'Зефір не жувальний, але до какао підійде', './app/img/sweet/marshmallow.png', '70 грн', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(17, 'Чоколяда чорна для чорних', './app/img/sweet/dark.png', '90 грн', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(18, 'Чоколяда біла для білих', './app/img/sweet/white.png', '85 грн', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(19, 'Чоколяда молочна солоденька', './app/img/sweet/milk.png', '75 грн', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(20, 'Варення бабусине звичайне', './app/img/sweet/jam.png', '100 грн', 4);

INSERT INTO students(id, student_name)
    Values(1, 'Бартосевич Володимир');

INSERT INTO students(id, student_name)
    Values(2, 'Беспалий Ілля');

INSERT INTO students(id, student_name)
    Values(3, 'Бокій Артем');

INSERT INTO students(id, student_name)
    Values(4, 'Боднік Кирило');

INSERT INTO students(id, student_name)
    Values(5, 'Бублик Єгор');

INSERT INTO students(id, student_name)
    Values(6, 'Вахтіна Єва');

INSERT INTO students(id, student_name)
    Values(7, 'Голік Владислав');

INSERT INTO students(id, student_name)
    Values(8, 'Головенко Олександр');

INSERT INTO students(id, student_name)
    Values(9, 'Долгова Єлизовета');

INSERT INTO students(id, student_name)
    Values(10, 'Іванченко Георгій');

INSERT INTO students(id, student_name)
    Values(11, 'Королюк Ярослав');

INSERT INTO students(id, student_name)
    Values(12, 'Лазоренко Нікіта');

INSERT INTO students(id, student_name)
    Values(13, 'Литвишко Нікіта');

INSERT INTO students(id, student_name)
    Values(14, 'Макарицький Олег');

INSERT INTO students(id, student_name)
    Values(15, 'Матюха Кирило');

INSERT INTO students(id, student_name)
    Values(16, 'Перевалов Максим');

INSERT INTO students(id, student_name)
    Values(17, 'Пєнський Володимир');

INSERT INTO students(id, student_name)
    Values(18, 'Рекечинський Дмитр');

INSERT INTO students(id, student_name)
    Values(19, 'Рудник Микола');

INSERT INTO students(id, student_name)
    Values(20, 'Сумський Павло');

INSERT INTO students(id, student_name)
    Values(21, 'Ткаченко Юлія');

INSERT INTO students(id, student_name)
    Values(22, 'Третяк Владислав');

INSERT INTO students(id, student_name)
    Values(23, 'Цасюк Ілля');

INSERT INTO category(id, name)
    Values(1, 'fruits');

INSERT INTO category(id, name)
    Values(2, 'vegs');

INSERT INTO category(id, name)
    Values(3, 'nuts');

INSERT INTO category(id, name)
    Values(4, 'sweet');

INSERT INTO cart(id, user_id, product_id)
    Values(1, 'user1', '2');

INSERT INTO cart(id, user_id, product_id)
    Values(2, 'user2', '3');
