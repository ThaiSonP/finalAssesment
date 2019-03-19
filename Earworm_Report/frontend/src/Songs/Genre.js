import React,{Component} from 'react'
import '../styling/Songs.css'
import axios from 'axios'
import DisplaySongs from './DisplaySongs'
import GenreOptions from './GenreOptions'

class Genre extends Component {
  constructor(props){
    super(props)
    this.state={
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

  filterGenres = ()=>{
    const {songs,selected}=this.state

    if(selected){
      const filteredSongs = songs.filter(el=>{
        return(
          parseInt(el.genre_id) === selected
        )
      })
      this.setState({
        songs:filteredSongs
      })
    }else{
      this.getSongs()
    }

  }


  handleChange = (e)=>{
    const {selected}=this.state
    this.setState({
      selected:parseInt(e.target.value)
    })
    axios.get(`/songs/genres/${selected}`)
    .then(thing=>{
      this.setState({
        songs:thing.data.songs
      })
    })
    // this.filterGenres()
  }

  render (){
    const{songs,genres}=this.state
      // console.log(this.state)
    return(
      <div className = 'songs'>
        <form onChange={this.handleChange} name='selected'>
          <select >
            <option value={null}> </option>
            <GenreOptions genres={genres}/>
          </select>
        </form>
        <p>This is the Songs By Genre Page</p>
        <DisplaySongs songs={songs}/>
      </div>
    )
  }
}

export default Genre
