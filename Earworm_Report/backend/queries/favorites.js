const db = require ('../database/index')

const getAllFavorites = (req,res)=>{
  db.any(
    'SELECT * '+
    'FROM favorites '
  ).then(response=>{
    res.status(200)
    .json({
      message: 'these are ALL THE favorites',
      favorites:response
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getFavoritesBySong = (req,res)=>{
  const id = req.params.id
  db.any(
    'SELECT * '+
    'FROM favorites '+
    'WHERE song_id = $1 ',id
  )
  .then(results=>{
    res.status(200)
    .json({
      message: 'these are all the favorites for THIS song',
      favorites: results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getFavoritesByUser = (req,res)=>{
  const id = req.params.id
  db.any(
    'SELECT * '+
    'FROM favorites '+
    'WHERE user_id = $1 ',id
  )
  .then(results=>{
    res.status(200)
    .json({
      message: 'these are all the favorites for THIS user',
      favorites: results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const postFavorite = (req,res)=>{
  db.none(
    'INSERT INTO favorites (user_id, song_id) '+
    'VALUES (${user_id},${song_id}) ',
    {user_id:req.body.user_id,
      song_id:req.body.song_id,
    }
  )
  .then(()=>{
    res.status(200).json({
      message: 'favorite has been created',
    })
  }).catch(err=>{
    console.log(err)
  })
}

const deleteFavorite = (req,res)=>{
  const id = req.params.id
  db.none('DELETE from favorites where id=$1',[id])
  .then(results=>{
    res.status(200)
    .json({
      message:'favoirte deleted'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports={
  getAllFavorites,
  getFavoritesBySong,
  getFavoritesByUser,
  postFavorite,
  deleteFavorite
}
