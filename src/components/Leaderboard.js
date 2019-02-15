import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import {LeaderboardRow} from './LeaderboardRow'
import TableBody from '@material-ui/core/TableBody';
import CustomTableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import formatJson from '../util/formatJson.js'
import "../styles/Leaderboard.css"
import Paper from '@material-ui/core/Paper'

import { configuration } from '../util/configuration.js'

class Leaderboard extends Component {

    state = {
      rows: []
    }

    createRows(data) {
        const rows = []
        
        data.forEach(person => {
          rows.push(
            <LeaderboardRow key={person[0]} index={data.indexOf(person) + 1} name={person[0]} scouts={person[1]}/>
          )
        })
        return rows
      }

  componentDidMount() {
    // Fetch and format JSON data
    fetch(configuration.url)
    .then(response => response.json())
    .then(data => {
      const formatted_data = formatJson(data)
      const rows = this.createRows(formatted_data)
      this.setState({rows: rows})
    })
  }

  render() {  
    return (
    <Paper className='Leaderboard' elevation={9}>
        <Table className='Leaderboard'>
            <TableHead>
            <TableRow>
                <CustomTableCell align='left'></CustomTableCell>
                <CustomTableCell align='left'><span class='LeaderboardHeaderText'>Scouter Name</span></CustomTableCell>
                <CustomTableCell align='left'><span class='LeaderboardHeaderText'>Number of Scouts</span></CustomTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows}
            </TableBody>
        </Table>
    </Paper>
    )
  }
}

export default Leaderboard;