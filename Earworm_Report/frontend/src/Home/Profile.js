import React,{Component} from 'react'
import PostSongs from './PostSongs'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedInUser:props.user,
      currentUser:+props.match.params.id
    }
  }
  render (){
    const{loggedInUser,currentUser}=this.state
    // console.log(this.state)

    return(
      <div>
        This is the Profile Page
        <PostSongs loggedInUser={loggedInUser}currentUser={currentUser}/>
      </div>
    )
  }
}

export default Profile
