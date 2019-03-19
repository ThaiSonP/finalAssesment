import React,{Component} from 'react'
import axios from 'axios'
import DisplaySongs from './DisplaySongs'
import '../styling/Songs.css'

class Songs extends Component {
  constructor(props){
    super(props)
    this.state={
      songs:[],
      selected:''
    }
  }

  getSongs=()=>{
    axios.get('/songs/')
    .then(result=>{
      this.setState({
        songs:result.data.songs
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
        songs:selectedSongs,
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
    const {songs,selected}=this.state
    console.log(this.state)
    return(
      <div className = 'songs'>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input type='text'name='selected'/>
          <input type = "submit" />
        </form>
        <DisplaySongs songs={songs}/>
      </div>
    )
  }
}

export default Songs
