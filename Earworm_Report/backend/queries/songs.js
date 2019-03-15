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

module.exports={
  getAllSongs
}
