import React from 'react'
import {Component} from 'react'
import Typography from '@material-ui/core/Typography';
import "../styles/Title.css"

class Title extends Component {
    render() {
        return(
            <div class='Title'>
                <Typography variant='h2' gutterBottom align='center'>SERT Scouting Leaderboard</Typography>
                <Typography variant='h4' gutterButtom align='center'>Last Updated: Bunnybots 2018</Typography>
            </div>
        )
    }
}

export default Title