import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../styling/DisplaySongs.css'
import CommentSection from './CommentSection'

// class DisplaySongs extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       songs:props.songs
//     }
//   }
//
// render(){
export const DisplaySongs = (props)=>{
  const {songs}=props

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
                <Link to={`/songs/${el.id}`}>{el.title} <br/></Link>
                By: <Link to={`/user/${el.user_id}`}>{el.username} <br/></Link>
              <Link to={`/genres/${el.genre_name}`}>{el.genre_name} <br/></Link>
              Favorites:{el.count}
            </p>
          </div>
        </div>
      )
    return(
      <CommentSection songDiv={songDiv} key={i}/>

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
