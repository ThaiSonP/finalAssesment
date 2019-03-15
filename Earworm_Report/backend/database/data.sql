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
  song_id INT REFERENCES songs(id)
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  comment_body VARCHAR,
  user_id INT REFERENCES users(id),
  song_id INT REFERENCES songs(id)
);

INSERT INTO users (username) values ('SAMPLE'),('Parabiosis'),('Turbidimeter'),('Aardwolf'),('Epistemology'),('Altitonant'),('AvienYips'),('Portatile'),('KnopeMaugre'),('Orpharion');
INSERT INTO genres (genre_name) values ('Soundtrack'),('Lo-Fi'),('Hip-hop'),('Pop'),('R&B');
INSERT INTO songs (title,img_url,user_id,genre_id) values ('Chivalry Is Dead','https://a.wattpad.com/cover/26230453-352-k465153.jpg',1,4),('Break (ATOL)','https://i.ytimg.com/vi/Veiot_DcdP8/hqdefault.jpg',5,3),('Sailing NOT Selling','https://images-na.ssl-images-amazon.com/images/I/51cIaFv5CVL._SX342_QL70_.jpg',8,5),('From There (そこから)','https://images-na.ssl-images-amazon.com/images/I/71SMbT2285L._SL1081_.jpg',3,1),('So into you','https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/So-Into-You.jpg/220px-So-Into-You.jpg',7,5),('Sunday Candy','https://i.ytimg.com/vi/i4ooH8frBWg/maxresdefault.jpg',4,3);
INSERT INTO songs (title,img_url,user_id,genre_id) values ('Just Friends (Sunny)','https://upload.wikimedia.org/wikipedia/en/2/28/JustFriendsSunny.jpg',1,5),('Hazy Year - Chirp','https://f4.bcbits.com/img/a1093274304_10.jpg',4,2),('Shoji - Cuba Libre','https://i1.sndcdn.com/artworks-000206079136-909y6x-t500x500.jpg',2,1),('Joe Villano - Days spent without you','https://i1.sndcdn.com/artworks-000184131717-0acj55-t500x500.jpg',4,2),('Ross David - fire burnin','https://m.media-amazon.com/images/I/51HdGKB0evL._SS500_.jpg', 9,4),('¥EN - awakening','https://i1.sndcdn.com/artworks-000173209180-1nxddk-t500x500.jpg',6,2);
INSERT INTO songs (title,img_url,user_id,genre_id) values ('Rich Brian - Dat $tick ', 'https://i1.sndcdn.com/artworks-000149348592-k2249q-t200x200.jpg',7,3),('Hanezeve Caradhina - A Made In Abyss Orchestration','https://i1.sndcdn.com/artworks-000391498023-t9of21-t500x500.jpg',3,1),('Lateeya - Lullaby','https://i.ytimg.com/vi/w1i-fS49o0o/hqdefault.jpg',4,4);
INSERT INTO favorites (user_id,song_id) values (10,14),(2,6),(7,4),(6,1),(1,12),(10,5),(4,8),(8,13),(7,12),(10,3),(8,11),(10,4),(10,8),(2,10),(1,8);
INSERT INTO favorites (user_id,song_id) values (9,6),(10,10),(7,13),(8,6),(3,5),(6,3),(2,2),(3,15),(5,14),(3,4),(6,15),(4,9),(5,4),(9,9),(2,5);
INSERT INTO favorites (user_id,song_id) values (6,11),(10,6),(6,2),(1,11),(3,1),(4,1),(1,5),(1,1),(2,9),(2,15);
INSERT INTO comments (comment_body,user_id, song_id) values ('Sick love this!!',7,1),('<<<3333',6,5),('I think you dont have idea on how your music is meaningful for me and how you inspire me. Really thanks, and really congratulations for being good :)',5,7),('Interesting concepts and rhymes. Check out my band if you got a sec. @bicicletas-por-la-paz',9,1),('young chosen one, golden boy',7,9),('is this a keshi song?',4,1),('this part makes me want to cry',2,11);
INSERT INTO comments (comment_body,user_id, song_id) values ('this guy is so good hehe',7,2),('ooooh got damn yo I was not ready for that. this song is just...amazing',1,14),('this guitar part is so gorgeous.',9,7),('beautiful',5,5),('yEET',5,11),('yEERR',1,8),('yEET',9,10),('YERRRR',3,9),('yEET',1,6);
INSERT INTO comments (comment_body,user_id, song_id) values ('Man... this version is NUTS',2,8),('hit me with that good vibes',10,4),('oh my lord yes',6,13),('oh i heard this song before' ,6,8),('follow me on insta',3,5),('follow me on insta',8,8);
