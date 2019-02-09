import React, { Component } from 'react';
import CustomTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import '../styles/Leaderboard.css'

export class LeaderboardRow extends Component {


  getMedalColor(position) {
    switch (position)  {
      case 1: return <span className='medal medal-gold'>{this.props.index}</span>
      case 2: return <span className='medal medal-silver'>{this.props.index}</span>
      case 3: return <span className='medal medal-bronze'>{this.props.index}</span>
      default: return <span className='medal medal-other'>{this.props.index}</span>
    }
  }
  
  render() {
      return(
      <TableRow className= 'TableRow'>
        <CustomTableCell className='LeaderboardPosition'>{this.getMedalColor(this.props.index)}</CustomTableCell>
        <CustomTableCell><span className='LeaderboardText'><b>{this.props.name}</b></span></CustomTableCell>
        <CustomTableCell className='LeaderboardRow' align='left'><span className='LeaderboardText'>{this.props.scouts}</span></CustomTableCell>
      </TableRow>
      )
    }
  }
