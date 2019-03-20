import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styling/DisplaySongs.css'
import DisplayComments from './DisplayComments'

class CommentSection extends Component{
  constructor (props){
    super(props)
    this.state={
      song_id:props.songid,
      comment_body:'',
      user_id:null,
      comments:[],
    }
  }

  getComments = ()=>{
    axios.get(`comments/song/${this.state.song_id}`)
    .then(response=>{
      // console.log(response.data.comments)
      this.setState({
        comments:response.data.comments
      })
    })
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.taget.value
    })
  }

  componentDidMount(){
    this.getComments()
  }



  render(){
    console.log(this.state)
    const {comments}=this.state

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
