import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class CommentSection extends Component{
  constructor (props){
    super(props)
    this.state={
      song_id:1,
      comment_body:'',
      user_id:null,
      comments:[]
    }
  }

  getComments = ()=>{
    axios.get(`comments/song/${this.state.song_id}`)
    .then(response=>{console.log(response)})
  }

  render(){
    console.log(this.props)
    const {key,songid,img,songTitle,userid,username,genrename,favorites}=this.props
    return(
      <div>
      <div className ="individualSong" >
        <div className = 'albumCover'>
          <Link to={`/songs/${songid}`}>
            <img src={`${img}`} alt=''/><br/>
          </Link>
        </div>
        <div className= 'songDescription'>
          <p>
            <Link to={`/songs/${songid}`}>{songTitle} <br/></Link>
            By: <Link to={`/user/${userid}`}>{username} <br/></Link>
            <Link to={`/genres/${genrename}`}>{genrename} <br/></Link>
            Favorites:{favorites}
          </p>
        </div>
      </div>
      </div>
    )
  }

}
export default CommentSection
