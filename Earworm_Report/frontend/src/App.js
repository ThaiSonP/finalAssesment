import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import './styling/App.css'

import NavBar from './Home/NavBar'
import Profile from './Home/Profile'
import HomePage from './Home/HomePage'
import Songs from './Songs/Songs'
import SingleSong from './Songs/SingleSong'
import Popularity from './Songs/Popularity'
import Genre from './Songs/Genre'


class App extends Component {
  constructor(props){
  super(props)
  this.state={
    loggedInUser:1
  }
}
  render() {
    const{loggedInUser}=this.state
    return (
      <div className="App">
        <NavBar loggedInUser={loggedInUser}/>
        <Switch>
          <Route exact path= '/' component={HomePage}/>
          <Route exact path= '/songs' component={Songs}/>
          <Route exact path = '/songs/bypop' component={Popularity}/>
          <Route exact path = '/songs/bygenre'
            render={(props) => <Genre{...props} user={loggedInUser}/>}
            />
          <Route path = '/songs/:id' component={SingleSong}/>
          <Route path = '/user/:id'
            render={(props) => <Profile{...props} user={loggedInUser}/>}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
