import React, { Component } from 'react';
import CustomTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import '../styles/Leaderboard.css'
import { bold } from 'ansi-colors';

export class LeaderboardRow extends Component {


  color(position) {
    switch (position)  {
      case 1: return <span className='medal-gold'>{this.props.index}</span>
      case 2: return <span className='medal-silver'>{this.props.index}</span>
      case 3: return <span className='medal-bronze'>{this.props.index}</span>
      default: return <span className='medal-other'>{this.props.index}</span>
    }
  }
  
  render() {
      return(
      <TableRow className= 'TableRow'>
        <CustomTableCell className='LeaderboardPosition'>{this.color(this.props.index)}</CustomTableCell>
        <CustomTableCell>{this.props.name}</CustomTableCell>
        <CustomTableCell className='LeaderboardRow' align='left'>{this.props.scouts}</CustomTableCell>
      </TableRow>
      )
    }
  }
