import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import {LeaderboardRow} from './components/LeaderboardRow'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './App.css';

function formatJson(json_data) {
  var scout_count = {}
  const metric_name = 'Scout Name'
  var metric_key = null

  // Find the key corresponding to the "Scout Name" metric
  Object.entries(json_data.teams[Object.keys(json_data.teams)[0]][0].metrics).forEach(obj => {
    if(obj[1].name.trim() === metric_name) {
      metric_key = obj[0]
    }
  }) 

  for (var team in json_data.teams) {
    // Loop through each team
    json_data.teams[team].forEach((obj) => {
      // Don't include scouts that have didn't change the name of the scout
      if ((obj.name).length < 5) {
        // Make sure the scouter name field isn't empty
        if(obj.metrics[metric_key].value != null) {
          var scouterName = (obj.metrics[metric_key].value).trim()
          // Count the number of times a scouter scouted
          if (scout_count[scouterName] == null) {
            scout_count[scouterName] = 1
          } else {
            scout_count[scouterName] += 1
          }
          // console.log(obj.metrics[metric_key].value.trim())
        }
      }
    })
  }

  var sorted = []
  for (var scoutName in scout_count) {
    sorted.push([scoutName, scout_count[scoutName]])
  }

  sorted = sorted.sort(function(a, b) {
    return b[1] - a[1];
  })

  return sorted
}

function createRows(data) {
  const rows = []

  console.log(data)

  data.forEach(person => {
    rows.push(
      <LeaderboardRow name={person[0]} scouts={person[1]}/>
    )
  })
  console.log(rows)
  return rows
}

class Leaderboard extends Component {

    state = {
      rows: []
    }

  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5c50f65da3fb18257ac82555")
    .then(response => response.json())
    .then(data => {
      const formatted_data = formatJson(data)
      const rows = createRows(formatted_data)
      this.setState({rows: rows})
    })
  }

  render() {
    console.log(this.state)
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