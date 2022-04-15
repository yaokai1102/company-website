import React, { Component } from 'react'
import './styles.scss'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import advantageIcon1 from '../../../assets/images/advantageIcon1.png'
import advantageIcon2 from '../../../assets/images/advantageIcon2.png'
import advantageIcon3 from '../../../assets/images/advantageIcon3.png'
import advantageIcon4 from '../../../assets/images/advantageIcon4.png'

export default function Advantage() {
    return (
        <Box className='advantage-root'>
            <p className='advantage-title'>advantage</p>
            <p className='advantage-introduce'>Its own core technology professional service support market widely recognized</p>
            <Box className='advantage-box'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Paper className='advantage-paper' >
                                    <img src={advantageIcon1}/>
                                    <h3>hardware</h3>
                                    <p>Comprehensive hardware development capability</p>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className='advantage-paper' >
                                    <img src={advantageIcon2}/>
                                    <h3>software</h3>
                                    <p>Comprehensive software development system</p>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className='advantage-paper' >
                                    <img src={advantageIcon3}/>
                                    <h3>test</h3>
                                    <p>Advanced testing equipment</p>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className='advantage-paper' >
                                    <img src={advantageIcon4}/>
                                    <h3>serve</h3>
                                    <p>Excellent service support</p>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
