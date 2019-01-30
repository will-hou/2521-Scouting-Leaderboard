import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export class LeaderboardRow extends Component {
    render() {
      return(
      <TableRow className="TableRow">
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.scouts}</TableCell>
      </TableRow>
      )
    }
  }
