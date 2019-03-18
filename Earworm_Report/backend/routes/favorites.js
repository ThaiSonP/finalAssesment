const express = require ('express');
const router = express.Router();

const db = require ('../queries/favorites')

// http://localhost:3009/favorites/
router.get('/',db.getAllFavorites)
router.get('/song/:id',db.getFavoritesBySong)
router.get('/user/:id',db.getFavoritesByUser)
router.post('/',db.postFavorite)
router.delete('/:id',db.deleteFavorite)

module.exports = router
