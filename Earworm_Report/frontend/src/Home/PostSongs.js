import React,{Component} from 'react'
import axios from 'axios'
import GenreOptions from '../Songs/GenreOptions'

class PostSongs extends Component{
  constructor(props){
    super(props)
    this.state={
      currentUser:props.currentUser,
      genres:[],
      title:null,
      img_url:null,
      user_id:props.loggedInUser,
      genre_id:0,
      display: props.display,
    }
  }

  getGenres=()=>{
    axios.get('/genres')
    .then(genres=>{
      this.setState({
        genres:genres.data.genres})
      })
  }

  componentDidMount=()=>{
    this.getGenres()
    }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitSong=async(e)=>{
    const {title,img_url,user_id,genre_id}=this.state
    e.preventDefault()

    await axios.post('/songs',
      {title:title,
        img_url:img_url,
        user_id:user_id,
        genre_id:genre_id})
        .then(response=>{
          console.log(response.data.message)
      })
    await this.setState({
      title:null,
      img_url:null,
      genre_id:null
    })


  }

  render(){
    const {user_id,currentUser,genres,display}=this.state
    // console.log(this.state)

    if(display && user_id===currentUser ){
      return(
        <div className= 'addSong'>
          Add New Song
          <form onChange = {this.handleChange} onSubmit={this.submitSong}>
            <input type='text' placeholder='title' name='title'/>
            <input type='text' placeholder='album cover' name='img_url'/>
            <select name='genre_id'>
              <option disabled>Choose a genre (Required)</option>
              <GenreOptions genres={genres}/>
            </select>
            <input type='submit'/>
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
