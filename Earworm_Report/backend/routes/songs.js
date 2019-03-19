const express = require ('express');
const router = express.Router();

const db = require ('../queries/songs')

// http://localhost:3009/songs/
router.get('/popular',db.getPopularSongs)
router.get('/',db.getSongsByDate)
router.get('/genres',db.getSongsByDate)
router.get('/genres/:genreId',db.getSongsByGenre)
router.get('/user/:userId',db.getSongsByUser)
router.get('/random',db.getOneSong)
router.post('/',db.postSong)
router.delete('/:songid',db.deleteSong)

module.exports = router
