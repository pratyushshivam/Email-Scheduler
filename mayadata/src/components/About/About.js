import React, { Component } from 'react'
import './About.css'
import Header from '../Header/Header'
import AboutBlock from '../AboutBlock/AboutBlock'

export class About extends Component {
    render() {
        return (
            <div className="about__main">
                <Header title="About Me" />
                <AboutBlock />

            </div>
        )
    }
}

export default About
