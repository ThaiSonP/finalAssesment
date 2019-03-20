import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styling/DisplaySongs.css'

class CommentSection extends Component{
  constructor (props){
    super(props)
    this.state={
      song_id:1,
      comment_body:'',
      user_id:null,
      comments:[]
    }
  }

  getComments = ()=>{
    axios.get(`comments/song/${this.state.song_id}`)
    .then(response=>{console.log(response)})
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.taget.value
    })
  }

  render(){
    console.log(this.props)

    return(
      <div>
        {this.props.songDiv}
        <form >
          <input type='text'name='comment_body'/>
          <input type='submit'/>
        </form >
      </div>
    )
  }

}
export default CommentSection
