// So the first thing that I notice isn't there hasn't
// been much styling changed since my last review. This
// is a concern. The app is not visually appealing. With
// this type of code challenge and employer would want to see
// styling. It's not a second thought, it's the first impression
// that an app gives.
// Commenting works well. Favoriting not workng anymore.. the
// text of the button only seems to change sometimes.
// Please clean your console.



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
