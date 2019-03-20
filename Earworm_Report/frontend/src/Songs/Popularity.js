//Still missing the favoriting ability but glad
// to see these are correctly sorted. 

import React,{Component} from 'react'
import axios from 'axios'
import DisplaySongs from './DisplaySongs'
import '../styling/Songs.css'

class Popularity extends Component {
  constructor(props){
    super(props)
    this.state={
      songs:[]
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
    const {songs}=this.state
    // console.log(songs)
    return(
      <div className = 'songs'>
        <DisplaySongs songs={songs}/>
      </div>
    )
  }
}

export default Popularity
