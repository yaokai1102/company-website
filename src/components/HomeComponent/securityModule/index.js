import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import './styles.scss'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import securitycon1 from '../../../assets/images/securitycon1.png'
import securitycon2 from '../../../assets/images/securitycon2.png'
import securitycon3 from '../../../assets/images/securitycon3.png'

export default function SecurityModule() {
    return (
        <Box className='security-box'>
            <List className='security-list'>
                <ListItem className='security-item'>
                    <a href=''>
                        <img src={securitycon1} className='securityicon' />
                        <Box className='security-explain-box'>
                            <p className='security-explain-title'>Network security</p><br />
                            <p className='security-explain-content'>Carrier industry</p>
                        </Box>
                    </a>
                </ListItem>
                <ListItem className='security-item'>
                    <a href=''>
                        <img src={securitycon2} className='securityicon' />
                        <Box className='security-explain-box'>
                            <p className='security-explain-title'>security service</p><br />
                            <p className='security-explain-content'>Customer oriented</p>
                        </Box>
                    </a>
                </ListItem>
                <ListItem className='security-item'>
                    <a href=''>
                        <img src={securitycon3} className='securityicon' />
                        <Box className='security-explain-box'>
                            <p className='security-explain-title'>urban safety</p><br />
                            <p className='security-explain-content'>Safety oriented production</p>
                        </Box>
                    </a>
                </ListItem>
            </List>
        </Box>
    )
}
