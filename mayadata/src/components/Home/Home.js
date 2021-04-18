import React, { Component } from 'react'
import Filter from '../Filter/Filter'
import Header from '../Header/Header'
import Table from '../Table/Table'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div className="home__main">
                <Header title="My Meetings" />
                <Filter />
                <Table />

            </div>
        )
    }
}

export default Home
