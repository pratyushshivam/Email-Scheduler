import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div className="header__main">

                <h1>{this.props.title}</h1>

            </div>
        )
    }
}

export default Header
