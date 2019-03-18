const express = require ('express');
const router = express.Router();

const db = require ('../queries/comments')

// http://localhost:3009/comments/
router.get('/',db.getAllComments)
router.get('/song/:id',db.getCommentsBySong)
router.patch('/:id',db.patchComment)
router.post('/',db.postComment)
router.delete('/:id',db.deleteComment)

module.exports = router
