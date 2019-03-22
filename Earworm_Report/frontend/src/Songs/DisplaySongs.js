import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/DisplaySongs.css'
import CommentSection from './CommentSection'

export const DisplaySongs = (props)=>{
  const {songs,user}=props

  if(songs){
  const DisplayFunction = songs.map((el,i)=>{
    const songDiv = (
      <div className ="individualSong" key={i}>
            <div className = 'albumCover'>
              <Link to={`/songs/${el.id}`}>
                <img src={`${el.img_url}`} alt=''/><br/>
              </Link>
            </div>
            <div className= 'songDescription'>

              <p>
                <button>favorite</button><br/>
                {el.title} <br/>
                By: <Link to={`/user/${el.user_id}`}>{el.username} <br/></Link>
                {el.genre_name} <br/>
                Favorites:{el.count}
            </p>
          </div>
        </div>
      )
    return(
      <CommentSection songDiv={songDiv} key={i} songid={el.id} user={user}/>
    )
  })

  return(
    <div>
      {DisplayFunction}
    </div>
  )}
}
// }
export default DisplaySongs
