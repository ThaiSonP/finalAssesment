var express = require('express');
var router = express.Router();

const db = require ('../queries/users')

// http://localhost:3009/users/
router.get('/', db.getAllUsers)
router.get('/:id',db.getSingleUser)
router.post('/',db.postNewUser)
router.delete('/:id',db.deleteUser)

module.exports = router;
