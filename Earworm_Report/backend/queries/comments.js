const db = require ('../database/index')

const getAllComments = (req,res)=>{
  db.any(
    'SELECT * '+
    'FROM comments '
  ).then(response=>{
    res.status(200)
    .json({
      message: 'these are ALL THE comments',
      comments:response
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getCommentsBySong = (req,res)=>{
  const id = req.params.id
  db.any(
    'SELECT * '+
    'FROM comments '+
    'JOIN users '+
    'ON comments.user_id = users.id '+
    'WHERE song_id = $1 '+
    'ORDER BY comments.id DESC',id
  )
  .then(results=>{
    res.status(200)
    .json({
      message: 'these are all the comments for THIS song',
      comments: results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const postComment = (req,res)=>{
  db.none(
    'INSERT INTO comments (comment_body,user_id, song_id) '+
    'VALUES (${comment_body},${user_id},${song_id}) ',
    {
      comment_body:req.body.comment_body,
      user_id:req.body.user_id,
      song_id:req.body.song_id
    }
  )
  .then(()=>{
    res.status(200).json({
      message: 'comment has been posted',
    })
  }).catch(err=>{
    console.log(err)
  })
}

const patchComment = (req,res)=>{
  db.none(
  'UPDATE comments SET comment_body =${comment_body}, user_id=${user_id},song_id=${song_id} WHERE id=${id}',
  {
    id:parseInt(req.params.id),
    comment_body:req.body.comment_body,
    user_id:req.body.user_id,
    song_id:req.body.song_id
  }
).then(()=>{
  res.status(200)
  .json({
    status:'this comment has been updated'
  })
}).catch(err=>{
  console.log(err)
})
}



const deleteComment = (req,res)=>{
  const id = req.params.id
  db.none('DELETE from comments where id=$1',[id])
  .then(results=>{
    res.status(200)
    .json({
      message:'comment deleted'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports={
  getAllComments,
  getCommentsBySong,
  postComment,
  patchComment,
  deleteComment
}
