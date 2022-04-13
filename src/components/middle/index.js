import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './styles.scss'

export default class index extends Component {
    render() {
        return (
            <Card className="textCard">
                <CardContent className='introduceCard'>
                    <h2>Our Team</h2>
                    <p> The production team is not only at the forefront of
                        the industry technically,but we pay more attention to
                        the clear and accurate expression of customers' products.
                        Most of us are from science, and we have done research
                        in various disciplines such as machinery, games, electronics,
                        physics, etc. We can easily understand customers' ideas,
                        so we can better express customers' intentions.</p>
                </CardContent>
            </Card>
        )
    }
}
