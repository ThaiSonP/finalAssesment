import React from 'react'
import Link from 'react-router-dom'
import '../styling/DisplaySongs.css'

export const DisplaySongs = (props)=>{
  const {songs}=props
  // console.log(songs)

  if(songs){
  const DisplayFunction = songs.map((el,i)=>{
    console.log(el)
    return(
      <div className ="individualSong" key={i}>
        <div>
          <img src={`${el.img_url}`} alt=''/><br/>
        </div>
        <div>
          <p>
            {el.username} <br/>
            {el.title} <br/>
            {el.genre_name} <br/>
            Favorites:{el.count}
          </p>
        </div>
      </div>
    )
  })

  return(
    <div>
      {DisplayFunction}
    </div>
  )
  }
}

export default DisplaySongs
