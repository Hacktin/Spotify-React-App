import React, { Component } from 'react'
import MusicianInfo from './components/Musician/MusicianInfo'
import Navi from './components/Navi/Navi'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import PlayListInfo from './components/PlayList/PlayListInfo'
import Home from './components/Home/Home';
import NotFound from './components/NotFound'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navi/>
        
        <Switch>
          
          <Route path="/artist" exact component={MusicianInfo}/>
          <Route path="/playlist" exact component={PlayListInfo}/>
          <Route path="/" exact component={Home}/>
          <Route component={NotFound}/>
        </Switch>
    
        
      </div>
    )
  }
}

