import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/DisplaySongs.css'
import axios from 'axios'
import DisplayComments from './DisplayComments'

export const DisplaySongs = (props)=>{
  const {songs}=props
  let comments = []
  // console.log(songs)

  if(songs){
  const DisplayFunction = songs.map((el,i)=>{

    comments =
    axios.get(`/comments/song/${el.id}`)
    .then(result=>{
      console.log(result.data.comments)
    })
    return(

      <div className ="individualSong" key={i}>
        <div className = 'albumCover'>
          <Link to={`/songs/${el.id}`}>
            <img src={`${el.img_url}`} alt=''/><br/>
          </Link>
        </div>
        <div className= 'songDescription'>
          <p>
            <Link to={`/songs/${el.id}`}>{el.title} <br/></Link>
            By: <Link to={`/user/${el.user_id}`}>{el.username} <br/></Link>
            <Link to={`/genres/${el.genre_name}`}>{el.genre_name} <br/></Link>
            Favorites:{el.count}
          </p>

        </div>
      </div>
    )
  })

  return(
    <div>
      {DisplayFunction}
      <DisplayComments comments={comments}/>
    </div>
  )
  }
}

export default DisplaySongs
