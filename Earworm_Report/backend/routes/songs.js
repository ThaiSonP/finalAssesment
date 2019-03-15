const express = require ('express');
const router = express.Router();

const db = require ('../queries/songs')

// http://localhost:3009/songs/
router.get('/',db.getAllSongs)
router.get('/genres/:genreId',db.getSongsByGenre)
router.get('/user/:userId',db.getSongsByUser)
router.get('/random',db.getOneSong)

module.exports = router
