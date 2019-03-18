import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar =(props) => {
  const {user_id}=props

    return(
      <nav>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/songs'>All Songs</Link>
          <Link to='/songs/bypop'>By Popularity</Link>
          <Link to='/songs/bygenre'>By Genre</Link>
          <Link to={`/user/${user_id}`}>My Profile</Link>
        </div>
      </nav>
    )

}

export default NavBar
