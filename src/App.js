import React from 'react'
import {Component}  from 'react';
import Leaderboard from './components/Leaderboard';
import Title from './components/Title'
import './styles/Leaderboard.css'

import Paper from '@material-ui/core/Paper'



class App extends Component {

  render() {
    return (
      <div> 
          <Title />
          <Leaderboard />
      </div>
    )
  }
}

export default App