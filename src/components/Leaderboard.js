import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import {LeaderboardRow} from './LeaderboardRow'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import formatJson from '../util/formatJson.js'

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
    .then(response => response.json())
    .then(data => {
      const formatted_data = formatJson(data)
      console.log("whee")
      const rows = this.createRows(formatted_data)
      this.setState({rows: rows})
      console.log(this.state)
    })
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Scouter Name</TableCell>
            <TableCell>Number of Scouts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows}
        </TableBody>
      </Table>
    )
  }
}

export default Leaderboard;