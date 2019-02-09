import React, { Component } from 'react';
import CustomTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import '../styles/Leaderboard.css'
import { bold } from 'ansi-colors';

export class LeaderboardRow extends Component {
    render() {
      return(
      <TableRow className= 'TableRow'>
        <CustomTableCell className='LeaderboardPosition'><b>{this.props.index}</b></CustomTableCell>
        <CustomTableCell>{this.props.name}</CustomTableCell>
        <CustomTableCell className='LeaderboardRow' align='left'>{this.props.scouts}</CustomTableCell>
      </TableRow>
      )
    }
  }
