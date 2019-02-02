import React, { Component } from 'react';
import CustomTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import '../styles/Leaderboard.css'

export class LeaderboardRow extends Component {
    render() {
      return(
      <TableRow className= 'TableRow'>
        <CustomTableCell>{this.props.name}</CustomTableCell>
        <CustomTableCell className='LeaderboardRow' align='right'>{this.props.scouts}</CustomTableCell>
      </TableRow>
      )
    }
  }
