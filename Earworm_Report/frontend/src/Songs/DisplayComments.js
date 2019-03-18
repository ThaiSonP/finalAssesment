import React from 'react'
// import {Link} from 'react-router-dom'
// import '../styling/DisplaySongs.css'
// import axios from 'axios'

export const DisplayComments = (props)=>{
  // const {comments}=props
  // console.log(songs)

  // if(comments){
  const DisplayFunction =()=>{

    return(
      <div className ="individualSong">
        this is a comment
      </div>
    )
  }

  return(
    <div>
      {DisplayFunction}
    </div>
  )
  // }
}

export default DisplayComments
