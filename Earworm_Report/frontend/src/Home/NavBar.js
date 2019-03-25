// I still recommend using NavLink. This is better for
// navbar navigation because it allows you to style the
// active class so the user can see what page they're on.

import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/NavBar.css'

export const NavBar =(props) => {
  const {loggedInUser}=props

    return(
      <nav>
        <div className = 'NavBar'>
          <div className = 'logo'>
            <Link to='/'>
              <h1>
                Earworm Report
              </h1>
            </Link>
          </div>
          <div className = 'navigation'>
            <Link to='/'>Home</Link>
            <Link to='/songs'>All Songs</Link>
            <Link to='/songs/bypop'>By Popularity</Link>
            <Link to='/songs/bygenre'>By Genre</Link>
            <Link to={`/user/${loggedInUser}`}>My Profile</Link>
          </div>
        </div>
      </nav>
    )

}

export default NavBar
