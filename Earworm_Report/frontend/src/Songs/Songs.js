//Good job overall. You're definitely off to a really
// great start.
//There are still a few that left to work on.
//This project needs a lot more styling, please look at wireframes and project specifications.
//It was hard for me to discern which was the search bar / comment input.
//The genre links are really cool (not working yet though and not required).
// Either keep them and make them work, or nix them.
//  Also it is not required to have a single song show page. Consider skipping until
// all required functionality is complete.
// I need to be able to favorite and unfavorite songs.
// I was also unable to leave a comment. Please fix.



import React,{Component} from 'react'
import axios from 'axios'
import DisplaySongs from './DisplaySongs'
import '../styling/Songs.css'

class Songs extends Component {
  constructor(props){
    super(props)
    this.state={
      songs:[],
      filteredSongs:[],
      selected:'',
      user:props.user
    }
  }

  getSongs=()=>{
    axios.get('/songs/')
    .then(result=>{
      this.setState({
        songs:result.data.songs,
        filteredSongs:result.data.songs
      })
    })
  }
  componentDidMount =()=>{
    this.getSongs()
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  filterSongs = ()=>{
    const{songs,selected} = this.state;

    if(selected){
      const selectedSongs = songs.filter(el=>{
        return(el.title.toLowerCase().includes(selected.toLowerCase()))
      })
      this.setState({
        filteredSongs:selectedSongs,
        selected: null
      })
    }else{
      this.getSongs()
      }
    }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.filterSongs()
  }


  render (){
    const {filteredSongs,user}=this.state
    // console.log(user)
    return(
      <div className = 'songs'>
        Search by title: <br/>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input type='text'name='selected'/>
          <input type = "submit" />
        </form>
        <DisplaySongs songs={filteredSongs} user={user}/>
      </div>
    )
  }
}

export default Songs
