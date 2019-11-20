-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS dishes CASCADE;
DROP TABLE IF EXISTS line_items CASCADE;
DROP TABLE IF EXISTS dish_reviews CASCADE;
DROP TABLE IF EXISTS transaction_stretch CASCADE;
DROP TABLE IF EXISTS histories_stretch CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  phone BIGINT NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  street varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  province varchar(50) NOT NULL,
  post_code varchar(50) NOT NULL
  -- history_id INTEGER REFERENCES histories_stretch(id)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP,
  started_at TIMESTAMP,
  ended_at TIMESTAMP,
  status varchar(100) NOT NULL,
  allergies TEXT
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL
);

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  price INTEGER NOT NULL,
  description varchar(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE histories_stretch (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  dish_id INTEGER REFERENCES dishes(id) ON DELETE CASCADE
);

CREATE TABLE line_items (
  id SERIAL PRIMARY KEY NOT NULL,
  dish_id INTEGER REFERENCES dishes(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL
);

CREATE TABLE dish_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  rating INTEGER,
  message TEXT
);

CREATE TABLE transaction_stretch (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  method varchar(255)
);
