DROP DATABASE IF EXISTS earworm;
CREATE DATABASE earworm;

\c earworm;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  UNIQUE (username)
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR NOT NULL,
  UNIQUE (genre_name)
);

CREATE TABLE songs(
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  img_url VARCHAR,
  user_id INT REFERENCES users(id),
  genre_id INT REFERENCES genres (id)
);

CREATE TABLE favorites(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  genre_id INT REFERENCES genres(id)
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment_body VARCHAR,
  user_id INT REFERENCES users(id),
  song_id INT REFERENCES songs(id)
)
