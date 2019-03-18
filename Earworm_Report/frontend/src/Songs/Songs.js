import React,{Component} from 'react'
import axios from 'axios'
import DisplaySongs from './DisplaySongs'

class Songs extends Component {
  constructor(props){
    super(props)
    this.state={
      songs:[]
    }
  }

  componentDidMount =()=>{
    axios.get('/songs/')
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
      <div>

        <DisplaySongs songs={songs}/>
      </div>
    )
  }
}

export default Songs
