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


class Leaderboard extends Component {

    state = {
      rows: []
    }

    createRows(data) {
        const rows = []
            
        data.forEach(person => {
          rows.push(
            <LeaderboardRow key={person[0]} name={person[0]} scouts={person[1]}/>
          )
        })
        return rows
      }

  componentDidMount() {
    // fetch("https://api.jsonbin.io/b/5c50f65da3fb18257ac82555")
    fetch("https://jsonstorage.net/api/items/dfd580d4-e3bf-416a-a695-810b196d41ba")
    // fetch("https://jsonstorage.net/api/items/cd10d9ec-dc6c-4a22-a836-31d6a4438761")
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
                <CustomTableCell align='center'>Scouter Name</CustomTableCell>
                <CustomTableCell align='center'>Number of Scouts</CustomTableCell>
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