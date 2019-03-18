import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'

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
    user_id:1
  }
}
  render() {
    const{user_id}=this.state
    return (
      <div className="App">
        <NavBar user_id={user_id}/>
        <Switch>
          <Route exact path= '/' component={HomePage}/>
          <Route exact path= '/songs' component={Songs}/>
          <Route path = '/songs/:id' component={SingleSong}/>
          <Route exact path = '/songs/bypop' component={Popularity}/>
          <Route exact path = '/songs/genre' component={Genre}/>
          <Route path = '/user/:id' component={Profile}/>
        </Switch>
      </div>
    );
  }
}

export default App;
