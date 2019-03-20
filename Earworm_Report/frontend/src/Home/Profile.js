// This page is missing all specified functionality and display.
// Please fix.

// Overall though, good job. Looking forward to seeing the final 
// result.

import React,{Component} from 'react'
import PostSongs from './PostSongs'
import axios from 'axios'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedInUser:props.user,
      currentUser:+props.match.params.id,
      display:true,
      songs:[],
      favorites:[]
    }
  }

  componentDidMount(){
    const {currentUser}=this.state
    // axios.get(`/users/${currentUser}`)
    // .then(result=>{
    //   console.log(result.data.user)
    // })
    axios.get(`/songs/user/${currentUser}`)
    .then(result=>{
      this.setState({
        songs:result.data.songs
      })
    })
  }

  render (){
    const{loggedInUser,currentUser}=this.state
    console.log(this.state)

    return(
      <div>
        <PostSongs loggedInUser={loggedInUser}currentUser={currentUser}/>
        <button>Posted</button>
        <button>Favorites</button>
      </div>
    )
  }
}

export default Profile
