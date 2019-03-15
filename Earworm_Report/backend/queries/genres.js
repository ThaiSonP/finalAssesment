const db = require ('../database/index.js')

const getAllGenres = (req,res)=>{
  db.any('SELECT * FROM genres')
  .then(results=>{
    res.status(200)
    .json({
      message: 'these are all the genres',
      genres: results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const postGenre = (req,res)=>{
  db.none(
    'INSERT INTO genres (genre_name) VALUES (${genre_name})',
    {genre_name:req.body.genre_name}
  )
  .then(()=>{
    res.status(200).json({
      message:'genre added'
    })
  })
}

module.exports={
  getAllGenres,
  postGenre
}
