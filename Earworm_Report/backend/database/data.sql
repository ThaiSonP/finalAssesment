DROP DATABASE IF EXISTS earworm;
CREATE DATABASE earworm;

\c earworm;

CREATE TABLE Users(
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  UNIQUE (username)
)
