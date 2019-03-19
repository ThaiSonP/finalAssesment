import React,{Component} from 'react'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      user_id:props.user,
      currentUser:+props.match.params.id
    }
  }
  render (){
    console.log(this.state)
    return(
      <div>
        This is the Profile Page
      </div>
    )
  }
}

export default Profile
