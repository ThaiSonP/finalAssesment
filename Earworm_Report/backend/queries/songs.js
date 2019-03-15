const db = require ('../database/index')

const getAllSongs = (req,res)=>{
  db.any(
    'SELECT songs.id,songs.title,songs.img_url,songs.user_id,songs.genre_id, COUNT (favorites.song_id) '+
    'FROM songs '+
    'JOIN favorites '+
    'ON songs.id = favorites.song_id '+
    'GROUP BY songs.id,songs.title,songs.img_url,songs.user_id,songs.genre_id '+
    'ORDER BY COUNT desc '
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

const getSongsByGenre = (req,res)=>{
  const genreId = req.params.genreId
  db.any(
    'SELECT * '+
    'FROM songs '+
    'JOIN genres '+
    'ON songs.genre_id = genres.id '+
    'WHERE genres.id = $1 ',genreId
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
    'SELECT * FROM songs WHERE user_id=$1',userId
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
      genre_id:req.body.genre_id
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

module.exports={
  getAllSongs,
  getSongsByGenre,
  getSongsByUser,
  getOneSong,
  postSong
}
