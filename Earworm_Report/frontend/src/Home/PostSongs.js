import React,{Component} from 'react'
import axios from 'axios'
import GenreOptions from '../Songs/GenreOptions'

class PostSongs extends Component{
  constructor(props){
    super(props)
    this.state={
      loggedInUser:props.loggedInUser,
      currentUser:props.currentUser,
      genres:[]
    }
  }

componentDidMount=()=>{
  axios.get('/genres')
    .then(genres=>{
      this.setState({
        genres:genres.data.genres})
    })
  }

  render(){
    const {loggedInUser,currentUser,genres}=this.state
    console.log(this.state)

    if(loggedInUser===currentUser){
      return(
        <div>
          Add New Song
          <form>
            <input type='text' placeholder='title'/>
            <select>
              <option></option>
              <GenreOptions genres={genres}/>
            </select>
          </form>
        </div>
      )
    }else{
    return(
      null
    )
  }}
}
export default PostSongs
