import React from 'react'
import {Component} from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import {configuration} from '../util/configuration'
import "../styles/Title.css"

class Title extends Component { 

    render() {
        return(
            <Paper classes={{ root: 'TitlePaperWrapper' }}>
                <div class='TitleInnerWrapper'>
                    <Typography variant='h2' gutterBottom align='center'><span class='Title'>Match Scouting Leaderboard</span></Typography>
                    <span><Typography variant='h4' gutterButtom align='center'>Last Updated: {configuration.lastUpdated}</Typography></span>
                </div>
            </Paper>
        )
    }
}

export default Title