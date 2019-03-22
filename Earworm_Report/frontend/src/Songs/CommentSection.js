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
      user_id:props.user,
      comments:[],
      display:true,
      favorites:[],
      currentFavorite:null
    }
  }

  getComments = ()=>{
    axios.get(`/comments/song/${this.state.song_id}`)
    .then(response=>{
      this.setState({
        comments:response.data.comments
      })
    })
  }

  getFavorites = async ()=>{
    const {song_id,user_id,favorites,currentFavorite}=this.state
    // this is going to be an axios call for this specific song
    // return an object if this song && user are both correct then we
    // can either un-favorite or make a post request to change the button and funcionats
    await axios.get(`/favorites/song/${song_id}`)
    .then(results=>{
      this.setState({
        favorites:results.data.favorites
      })
    })

    const current = favorites.find(el=>{
      return (el.user_id===user_id)
    })

    await this.setState({
      currentFavorite: current
    })

  }



  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  componentDidMount(){
    this.getComments()
    this.getFavorites()
  }

  submitComment=async(e)=>{
    const{comment_body,user_id,song_id}=this.state

    e.preventDefault()
    await axios.post('/comments',{
      comment_body:comment_body,
      user_id:user_id,
      song_id:song_id
    })
    .then(response=>{
      console.log(response.data.message)
    })
    await this.setState({
      comment_body:null
    })
    await this.getComments()
  }

  testButton=()=>{
    const {display}=this.state
    this.setState({
      display: !display
    })
  }

  render(){
    console.log(this.state.currentFavorite)
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

        <button onClick={this.testButton}>
          {this.state.display ? 'Favorite':'Unfavorite'}
        </button>
        {DisplayFunction}
        <form onChange={this.handleChange}  onSubmit={this.submitComment}>
          <input type='text'name='comment_body'/>
          <button type='submit'>Add Comment</button>
        </form >

      </div>
    )

  }

}
export default CommentSection
