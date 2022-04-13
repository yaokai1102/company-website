import React, { Component } from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../assets/images/aaaa.jpeg'
import imageThree from '../../assets/images/b.jpeg'
import './styles.scss'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class index extends Component {
  render() {
    return (
      <Carousel
        plugins={[
          'infinite',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3.9,
            }
          },
        ]}
        className='picture-Carousel'>
        <Box>
          <Grid item xs>
            <img src={imageOne} />
            <Paper className="paper">aka kaikai<br />
            city from dbc
            </Paper>
          </Grid>
        </Box>
        <Box>
          <Grid item xs>
            <img src={imageThree} />
            <Paper className="paper">aka kaikai<br />
            city from dbc
            </Paper>
          </Grid>
        </Box>

      </Carousel>
    )
  }
}

