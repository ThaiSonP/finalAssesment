import React,{Component} from 'react'
import PostSongs from './PostSongs'
import axios from 'axios'
import DisplaySongs from '../Songs/DisplaySongs'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedInUser:props.user,
      currentUser:+props.match.params.id,
      display:true,
      songs:[],
      favorites:[],
      selected:[]
    }
  }

  componentDidMount (){
    const {currentUser,songs}=this.state

     axios.get(`/songs/user/${currentUser}`)
    .then(result=>{
      this.setState({
        songs:result.data.songs,
        selected:result.data.songs
      })
    })

     axios.get(`/favorites/user/${currentUser}`)
    .then(result=>{
      this.setState({
        favorites:result.data.favorites
      })
    })

  }

  postedButton=async()=>{
    const{songs}=this.state

    await this.setState({
        selected:songs
      })

  }

  favoriteButton=async()=>{
    const{favorites}=this.state

    await this.setState({
        selected:favorites
      })

  }


  render (){
    const{loggedInUser,currentUser,selected}=this.state
    console.log(this.state)

    return(
      <div>
        <PostSongs loggedInUser={loggedInUser}currentUser={currentUser}/>
        <button onClick={this.postedButton}>Posted</button>
        <button onClick={this.favoriteButton}>Favorites</button>
        <DisplaySongs songs={selected} user={loggedInUser}/>
      </div>
    )
  }
}

export default Profile
