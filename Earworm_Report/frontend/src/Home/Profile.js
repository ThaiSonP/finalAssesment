// Needs a css indication of whether we're on posted or
// favorires.
// When I post a new song, it should trigger a rerender.
// Button says unfavorite, but I haven't favorited. If I click it
// and refresh it the button doesn't change but the count does.
// I click again and the refresh, the count is now 2. But they are both me.

//I go to favorites and click on a different user. The url changes
// but the page does not rerender. 

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
