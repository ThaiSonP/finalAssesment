import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styling/comments.css'

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
    axios.get(`/comments/song/${this.state.song_id}`)
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

  submitComment=async(e)=>{
    const{comment_body,user_id,song_id}=this.state
    axios.post('/comments')
  }

  render(){
    // console.log(this.state)
    const {comments}=this.state

    const DisplayFunction = comments.map((el,i)=>{
      return(
        <div className='singleComment' key={i}>
          {el.comment_body}<br/>
          By: <Link to={`/user/${el.user_id}`}>{el.username} <br/></Link>
        </div>
      )
    })

    return(
      <div className= 'comments'>

        {this.props.songDiv}
        {DisplayFunction}
        <form >
          <input type='text'name='comment_body'/>
          <input type='submit'/>
        </form >

      </div>
    )

  }

}
export default CommentSection
