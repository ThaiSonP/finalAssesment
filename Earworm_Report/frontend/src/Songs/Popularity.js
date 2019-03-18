import React,{Component} from 'react'
import axios from 'axios'
import DisplaySongs from './DisplaySongs'

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
    console.log(songs)
    return(
      <div>
        <DisplaySongs songs={songs}/>
      </div>
    )
  }
}

export default Popularity
