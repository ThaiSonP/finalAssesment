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

// const getSingleUser = ()=>{
//
// }
//
// const postNewUser=()=>{
//
// }
//
// const deleteUser=()=>{
//
// }
module.exports={
  getAllUsers
}
