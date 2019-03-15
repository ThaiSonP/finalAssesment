const pgp = require ('pg-promise')({});
const db = pgp ('postgres://localhost/earworm');

module.exports = db
