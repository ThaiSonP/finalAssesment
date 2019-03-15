const db = require ('../database/index.js')

const getAllUsers = (req,res)=>{
  db.any('select * from users')
  .then(results=>{
    res.status(200)
      .json({
      message: 'these are all the users',
      users:results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getSingleUser = (req,res)=>{
  const id = req.params.id;
  db.one('SELECT * FROM users WHERE id =$1',id)
  .then(result=>{
    res.status(200)
    .json({
      message: 'this is ONE user',
      user:result
    })
  })
}

const postNewUser=(req,res)=>{
  db.none(
    'INSERT INTO users (username) VALUES (${username})',
    {username:req.body.username}
  )
  .then(()=>{
    res.status(200).json({
      message: 'Account created'
    })
  }).catch(err=>{
    res.status(500).json({
      message:err
    })
  })
}

const deleteUser=(req,res)=>{
  const id=req.params.id
  db.none('DELETE from users where id=$1',[id])
  .then(results=>{
    res.status(200)
    .json({
      message:'Account deleted'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports={
  getAllUsers,
  getSingleUser,
  postNewUser,
  deleteUser
}
