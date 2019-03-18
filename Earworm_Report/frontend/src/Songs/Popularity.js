import React,{Component} from 'react'
import axios from 'axios'


class Popularity extends Component {
  constructor(props){
    super(props)
    this.state={
      songs:null
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
        This is the Songs By Popularity Page
      </div>
    )
  }
}

export default Popularity
