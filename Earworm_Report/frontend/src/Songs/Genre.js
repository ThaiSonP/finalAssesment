import React,{Component} from 'react'
import '../styling/Songs.css'
import axios from 'axios'
import DisplaySongs from './DisplaySongs'
import GenreOptions from './GenreOptions'

class Genre extends Component {
  constructor(props){
    super(props)
    this.state={
      user:props.user,
      genres:[],
      songs:[],
      selected:null
    }
  }

  getGenres = ()=>{axios.get('/genres')
    .then(genres=>{
      this.setState({
        genres:genres.data.genres})
    })
  }
  getSongs=()=>{ axios.get('/songs/genres')
    .then(songs=>{
      this.setState({
        songs:songs.data.songs
      })
    })
  }
    componentDidMount=()=>{
      this.getGenres();
      this.getSongs()
  }

  filterSongs = async ()=>{
    const {selected}=this.state
    await axios.get(`/songs/genres/${selected}`)
        .then(thing=>{
          this.setState({
            songs:thing.data.songs
          })
        })
  }

  handleChange = async (e)=>{

    await this.setState({
      selected:parseInt(e.target.value)
    })

  }

  handleSubmit = async(e)=>{
    await e.preventDefault()
    await this.filterSongs()

  }

  render (){
    const{songs,genres,user}=this.state

    return(
      <div className = 'songs'>
        Filter by genre: <br/>
      <form onChange={this.handleChange} onSubmit={this.handleSubmit} name='selected'>
          <select >
            <option value={null}> </option>
            <GenreOptions genres={genres}/>
          </select>
          <input type="submit"/>
        </form>
        <DisplaySongs songs={songs} user={user}/>
      </div>
    )
  }
}

export default Genre
