import React,{Component} from 'react'
import '../styling/Songs.css'

class Genre extends Component {
  constructor(props){
    super(props)
    this.state={
      songs:[]
    }
  }

  render (){
    return(
      <div className = 'songs'>
        <p>This is the Songs By Genre Page</p>
      </div>
    )
  }
}

export default Genre
