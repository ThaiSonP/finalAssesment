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
