import React, { Component, useState } from 'react'
import './Filter.css'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import DatePicker from 'react-date-picker';

function Filter() {
    const [value, onChange] = useState(new Date());


    return (
        <div className="filter__main">
            <div className="filter__main__one">
                <SearchIcon />
                <input type="text" placeholder="Search" />

            </div>
            <div className="filter__main__one filter_two">
                <p>From :</p>
                <input className="calendar" type="date" />
            </div>
            <div className="filter__main__one filter_two">
                <p>To :</p>
                <input className="calendar" type="date" />
            </div>


        </div>
    )
}

export default Filter
