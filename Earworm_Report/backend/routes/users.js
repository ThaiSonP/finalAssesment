var express = require('express');
var router = express.Router();

const db = require ('../queries/users')

/* GET users listing. */
router.get('/', db.getAllUsers)
router.get('/:id',db.getSingleUser)
router.post('/',db.postNewUser)

module.exports = router;
