import React,{Component} from 'react'
import '../styling/Songs.css'
import axios from 'axios'
import DisplaySongs from './DisplaySongs'

class Genre extends Component {
  constructor(props){
    super(props)
    this.state={
      genres:[],
      songs:[]
    }
  }

  componentDidMount=()=>{
    axios.get('/genres')
    .then(genres=>{
      this.setState({
        genres:genres.data.genres})
    })
    axios.get('/songs')
    .then(songs=>{
      this.setState({
        songs:songs.data.songs
      })
    })
  }

  render (){
    const{songs,genres}=this.state
      console.log(this.state)
    return(
      <div className = 'songs'>
        <p>This is the Songs By Genre Page</p>
        <DisplaySongs songs={songs}/>
      </div>
    )
  }
}

export default Genre
