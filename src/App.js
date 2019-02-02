import React from 'react'
import {Component}  from 'react';
import Leaderboard from "./components/Leaderboard";
import './styles/Leaderboard.css'

class App extends Component {

  render() {
    return (
      <div className='Leaderboard'>
        <Leaderboard />
      </div>
    )
  }
}

export default App