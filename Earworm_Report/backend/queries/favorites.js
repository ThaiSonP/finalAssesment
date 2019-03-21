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
    'SELECT songs.id, songs.title,songs.genre_id,songs.img_url,songs.user_id,genres.genre_name, USERs.username, favorites.id , COUNT (favorites.song_id) '+
    'FROM songs '+
    'JOIN genres '+
    'ON songs.genre_id = genres.id '+
    'JOIN users '+
    'ON songs.user_id = users.id '+
    'LEFT JOIN favorites '+
    'ON songs.id = favorites.song_id '+
    'WHERE favorites.user_id = $1 ' +
    'GROUP BY songs.id, songs.title,songs.genre_id,songs.img_url,songs.user_id,genres.genre_name, USERs.username, favorites.id '+
    'ORDER BY favorites.id DESC ',id
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
