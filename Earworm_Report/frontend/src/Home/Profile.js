// This page is missing all specified functionality and display.
// Please fix.

// Overall though, good job. Looking forward to seeing the final 
// result.

import React,{Component} from 'react'
import PostSongs from './PostSongs'
import axios from 'axios'
import DisplaySongs from '../Songs/DisplaySongs'
import '../styling/profile.css'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedInUser:props.user,
      currentUser:+props.match.params.id,
      songs:[],
      favorites:[],
      selected:[],
      display:true,
      profileName:''
    }
  }

  componentDidMount (){
    const {currentUser,songs}=this.state

     axios.get(`/songs/user/${currentUser}`)
    .then(result=>{
      this.setState({
        songs:result.data.songs,
        selected:result.data.songs,
        profileName:result.data.songs[0].username
      })
    })

     axios.get(`/favorites/user/${currentUser}`)
    .then(result=>{
      this.setState({
        favorites:result.data.favorites,
      })
    })

  }

  postedButton=async()=>{
    const{songs}=this.state

    await this.setState({
        selected:songs,
        display:true
      })

  }

  favoriteButton=async()=>{
    const{favorites}=this.state

    await this.setState({
        selected:favorites,
        display:false
      })

  }


  render (){
    const{loggedInUser,currentUser,selected,display}=this.state
    console.log(this.state)

    return(
      <div className= 'profileContainer'>
          <h1>{this.state.profileName}</h1><br/>
        <div className='buttons'>
          <button onClick={this.postedButton}>Posted</button>
          <button onClick={this.favoriteButton}>Favorites</button>
        </div>
        <div className ={this.state.display ? 'Posted':'Favorites'}>
          <PostSongs loggedInUser={loggedInUser}currentUser={currentUser} display={display}/>

          <DisplaySongs songs={selected} user={loggedInUser}/>
        </div>
    </div>
    )
  }
}

export default Profile
