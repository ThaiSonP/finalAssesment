const express = require('express')
const router = express.Router()

const db = require('../queries/genres')

// http://localhost:3009/genres

router.get('/',db.getAllGenres)
router.post('/',db.postGenre)

module.exports = router
