-- Users table seeds here (Example)
INSERT INTO users(name, phone, email, password, street, city, province, post_code) VALUES('Nick Hoszko', 2368864342, 'nhoszko@gmail.com', 'password', '3968 Yew St', 'Vancouver', 'British Columbia', 'V63 B3L');
INSERT INTO users(name, phone, email, password, street, city, province, post_code) VALUES('Stella Zhou', 6122448471, 'stellaz@gmail.com', 'password', '123 Fake St', 'Vancouver', 'British Columbia', 'V63 B12');
INSERT INTO users(name, phone, email, password, street, city, province, post_code) VALUES('Chris Drysdale', 5555555551, 'cdrysdale@gmail.com', 'password', '456 Main St', 'Vancouver', 'British Columbia', 'V3V XML');


INSERT INTO orders(user_id, created_at, started_at, ended_at, status, allergies) VALUES(1, '2019-11-15T017:23:20.000Z', '2019-11-15T017:26:20.000Z','2019-11-15T017:40:20.000Z', 'ready for delivery', 'I''m allgeric to water');

INSERT INTO categories(name) VALUES('appetizer');
INSERT INTO categories(name) VALUES('main');
INSERT INTO categories(name) VALUES('dessert');
INSERT INTO categories(name) VALUES('drink');

INSERT INTO dishes(name, price, image, category_id) VALUES('Gyoza', 1.50, 'urlImage', 1);
INSERT INTO dishes(name, price, image, category_id) VALUES('Hot Dog', 2.50, 'urlImage', 2);
INSERT INTO dishes(name, price, image, category_id) VALUES('Tiramisu', 5.00, 'urlImage', 3);
INSERT INTO dishes(name, price, image, category_id) VALUES('Martini', 7.50, 'urlImage', 4);

INSERT INTO line_items(dish_id, order_id, quantity) VALUES(1, 1, 3);
INSERT INTO line_items(dish_id, order_id, quantity) VALUES(3, 1, 2);
