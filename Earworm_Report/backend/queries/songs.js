const db = require ('../database/index')

const getPopularSongs = (req,res)=>{
  db.any(
    'SELECT songs.id, songs.title,songs.img_url,songs.user_id,genres.genre_name, USERs.username, COUNT (favorites.song_id) '+
    'FROM songs '+
    'JOIN genres '+
    'ON songs.genre_id = genres.id '+
    'JOIN users '+
    'ON songs.user_id = users.id '+
    'LEFT JOIN favorites '+
    'ON songs.id = favorites.song_id '+
    'GROUP BY songs.id, songs.title,songs.img_url,songs.user_id,genres.genre_name, USERs.username '+
    'ORDER BY count DESC '
  ).then(response=>{
    res.status(200)
    .json({
      message: 'these are ALL THE SONGS SORTED BY FAVORITES',
      songs:response
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getSongsByDate = (req,res)=>{
  db.any(
    'SELECT songs.id, songs.title,songs.genre_id,songs.img_url,songs.user_id,genres.genre_name, USERs.username, COUNT (favorites.song_id) '+
    'FROM songs '+
    'JOIN genres '+
    'ON songs.genre_id = genres.id '+
    'JOIN users '+
    'ON songs.user_id = users.id '+
    'LEFT JOIN favorites '+
    'ON songs.id = favorites.song_id '+
    'GROUP BY songs.id, songs.title,songs.genre_id,songs.img_url,songs.user_id,genres.genre_name, USERs.username '+
    'ORDER BY songs.id DESC '
  ).then(response=>{
    res.status(200)
    .json({
      message: 'these are all the songs via latest first',
      songs:response
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getSongsByGenre = (req,res)=>{
  const genreId = req.params.genreId
  db.any(
    'SELECT songs.id, songs.title,songs.genre_id,songs.img_url,songs.user_id,genres.genre_name, USERs.username, COUNT (favorites.song_id) '+
    'FROM songs '+
    'JOIN genres '+
    'ON songs.genre_id = genres.id '+
    'JOIN users '+
    'ON songs.user_id = users.id '+
    'LEFT JOIN favorites '+
    'ON songs.id = favorites.song_id '+
    'WHERE genres.id = $1 '+
    'GROUP BY songs.id, songs.title,songs.genre_id,songs.img_url,songs.user_id,genres.genre_name, USERs.username '
    ,genreId
  )
  .then(results=>{
    res.status(200)
    .json({
      message: 'these are all the songs for THIS genre',
      songs: results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getSongsByUser = (req,res)=>{
  const userId = req.params.userId
  db.any(
    'SELECT songs.id, songs.title,songs.genre_id,songs.img_url,songs.user_id,genres.genre_name, USERs.username, COUNT (favorites.song_id) '+
    'FROM songs '+
    'JOIN genres '+
    'ON songs.genre_id = genres.id '+
    'JOIN users '+
    'ON songs.user_id = users.id '+
    'LEFT JOIN favorites '+
    'ON songs.id = favorites.song_id '+
    'WHERE songs.user_id = $1 ' +
    'GROUP BY songs.id, songs.title,songs.genre_id,songs.img_url,songs.user_id,genres.genre_name, USERs.username '+
    'ORDER BY songs.id DESC ',userId
  )
  .then(results=>{
    res.status(200)
    .json({
      message:'these are all the songs for THIS user',
      songs:results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getOneSong = (req,res)=>{
  db.any(
    'SELECT * '+
    'FROM songs '+
    'ORDER BY RANDOM() '+
    'LIMIT 1'
  ).then(result=>{
    res.status(200)
    .json({
      message:'this is ONE randomly slected song',
      song: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

const postSong = (req,res)=>{
  db.none(
    'INSERT INTO songs (title, img_url, user_id, genre_id) '+
    'VALUES (${title},${img_url},${user_id},${genre_id}) ',
    {title:req.body.title,
      img_url:req.body.img_url,
      user_id:req.body.user_id,
      genre_id:parseInt(req.body.genre_id)
    }
  )
  .then(()=>{
    res.status(200).json({
      message: 'Song has been uploaded',
    })
  }).catch(err=>{
    console.log(err)
  })
}

const deleteSong = (req,res)=>{
  const songid = req.params.songid
  db.none('DELETE from SONGS where songs.id=$1',[songid])
  .then(results=>{
    res.status(200)
    .json({
      message:'song deleted'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports={
  getPopularSongs,
  getSongsByDate,
  getSongsByGenre,
  getSongsByUser,
  getOneSong,
  postSong,
  deleteSong
}
