// Genre missing same comment and favoriting func.
// Also, their should be a submit button next to the
// select. The songs should not be filtered on change but
// instead when the submit is entered. 

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

    this.filterSongs()
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
        <DisplaySongs songs={songs}/>
      </div>
    )
  }
}

export default Genre
