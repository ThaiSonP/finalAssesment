var express = require('express');
var router = express.Router();

const db = require ('../queries/users')

/* GET users listing. */
router.get('/', db.getAllUsers);

module.exports = router;
