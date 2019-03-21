import React,{Component} from 'react'
import axios from 'axios'
import DisplaySongs from './DisplaySongs'
import '../styling/Songs.css'

class Popularity extends Component {
  constructor(props){
    super(props)
    this.state={
      songs:[],
      user:props.user
    }
  }

  componentDidMount =()=>{
    axios.get('/songs/popular')
    .then(result=>{
      this.setState({
        songs:result.data.songs
      })
    })
  }

  render (){
    const {songs,user}=this.state
    // console.log(songs)
    return(
      <div className = 'songs'>
        <DisplaySongs songs={songs} user={user}/>
      </div>
    )
  }
}

export default Popularity
