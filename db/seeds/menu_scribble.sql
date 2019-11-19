INSERT INTO users(name, phone, email, password, street, city, province, post_code) VALUES('Nick Hoszko', 2368864342, 'nhoszko@gmail.com', 'password', '3968 Yew St', 'Vancouver', 'British Columbia', 'V63 B3L');
INSERT INTO users(name, phone, email, password, street, city, province, post_code) VALUES('Stella Zhou', 6122448471, 'stellaz@gmail.com', 'password', '123 Fake St', 'Vancouver', 'British Columbia', 'V63 B12');
INSERT INTO users(name, phone, email, password, street, city, province, post_code) VALUES('Chris Drysdale', 5555555551, 'cdrysdale@gmail.com', 'password', '456 Main St', 'Vancouver', 'British Columbia', 'V3V XML');

INSERT INTO categories(name) VALUES ('Bev');
INSERT INTO categories( name) VALUES ('Sandwich');
INSERT INTO categories(name) VALUES ('Salad');
INSERT INTO categories(name) VALUES ('Fruit');
INSERT INTO categories(name) VALUES ('Cookie');
INSERT INTO categories(name) VALUES ('Donut');


INSERT INTO dishes(name, price, description, category_id) VALUES ('Espresso', 3, 'Fresh coffee from ground beans. Rich & aromatic', 1);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Americano', 3.35, 'Espresso with hot water', 1);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Cappuccino', 3.50, 'Espresso with steamed milk & foam', 1);
INSERT INTO dishes(name, price, description, category_id) VALUES ('San Pellegrino', 3.00, 'Natural italian mineral water', 1);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Canada Dry Gingerale', 3.50, 'A sparkling favourite since 1904! 100% natural flavours', 1);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Berrylicious Smoothie ', 8.00, 'Banana, blueberry, strawberry, raspberry, almond milk, lemon, maple syrup & mint', 1);


INSERT INTO dishes(name, price, description, category_id) VALUES ('Bacon & Gouda Egg Sandwich', 5.50, 'Bacon, Parmesan Frittata & Aged Gouda Cheese on an Artisan Roll', 2);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Turkey & Egg White Sandwich', 5.50, 'Sizzling Turkey Bacon & Rice Creamy Melted Cheddar on an Organic English Wheat Muffin', 2);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Sausage, Egg & Cheddar Sandwich', 5.50, 'Savoury Sausage Patty, Fluffy Eggs & Aged Cheddar on a Toasted English Muffin', 2);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Spinach & Feta Sandwich', 5.00, 'Spinach, Feta Cheese & Tomatoes inside a Toasted Whole Wheat Bun', 2);

INSERT INTO dishes(name, price, description, category_id) VALUES ('Cobb', 12.55, 'Roasted chicken, crispy bacon, romaine lettuce, argula, tomatoes, roasted white cabbage, cucumber, red onion, soft boiled, blue cheese & tangy mustard vinaigrette', 3);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Kale Caesar ', 12.05, 'Smoked chicken, kale, romaine lettuce, grated parmigiano reggiano cheese, garlic & herb croutons, toasted cashews, 1/2 ramen egg, lemon & caesar dressing', 3);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Avo Salad', 13.05, 'Romaine, argula, shredded purple cabbage, oragnic quinoa, pickled carrots, red onion, feta, spiced sunflower seeds, toasted tortilla, lime & half an avocado', 3);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Orange Beets', 12.05, 'Golden quinoa, purple beets, goats cheese, toasted almonds, roasted yams, mint, parsley, orange segments, roamine, argula, shredded purple cabbage, citrus mint dressing', 3);

INSERT INTO dishes(name, price, description, category_id) VALUES ('Apple', 0.85, 'Crunchy apple', 4);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Orange', 0.75, 'Fresh, juicey orange', 4);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Banana', 1.00, 'Sweet, ripe banana', 4);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Mixed Berries ', 5.55, 'Vitaminful seasonal berries', 4);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Tropical Salad', 6.05, 'Taste of the tropics', 4);

INSERT INTO dishes(name, price, description, category_id) VALUES ('Oatmeal', 3.25, 'Rolled oats, raisins and dried apricots', 5);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Ginger', 3.25, 'Classic chewy cookie with scoop of sweet & a dash of zing', 5);
INSERT INTO dishes(name, price, description, category_id) VALUES ('M&mmmmm ', 3.50, 'Soft & chewy M&M spiked cookie', 5);
INSERT INTO dishes(name, price, description, category_id) VALUES ('ChocoFun ', 3.25, 'Chewy cookie with premium semisweet chocolate chunks', 5);
INSERT INTO dishes(name, price, description, category_id) VALUES ('White Magic', 3.55, 'Vegan oatmeal, macademia nuts, almonds & coconut', 5);

INSERT INTO dishes(name, price, description, category_id) VALUES ('Vanilla Bean Donut', 4.50, 'Pillow of goodness topped with an oragnic ground vanilla bean glaze, an old school classic', 6);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Chocolate Glaze Donut', 4.50, 'A straight up 55% Belgian Chocolate ganache glaze, done proper', 6);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Smoked Maple Walnut', 4.50, 'Yeast donut topped with our maple glaze and our own spiced walnuts', 6);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Apple Fritter', 4.50, 'Chunks of fresh apple & cinnamon rolled into this yeast dough, fried to crispy perfection & topped with cinnamon glaze', 6);
INSERT INTO dishes(name, price, description, category_id) VALUES ('Vegan Salted Caramel', 5.05, 'A round of vegan & gluten friendly goodness with a Salty caramel glaze', 6);
