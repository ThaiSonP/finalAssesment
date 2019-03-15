const express = require ('express');
const router = express.Router();

const db = require ('../queries/songs')

// http://localhost:3009/songs/
router.get('/',db.getAllSongs)

module.exports = router
