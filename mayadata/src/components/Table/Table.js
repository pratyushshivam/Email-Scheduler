import React, { Component, useEffect, useState } from 'react'
import './Table.css'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import axios from '../../axios'
function Table() {
    const [responseData, setResponseData] = useState([])

    useEffect(() => {
        axios.get('api/v1/table/sync').then(response => {
            console.log(response.data)
            setResponseData((prev) => [...response.data]);
        })
    }, [])

    function meetingNameHandler(e) {
        console.log(e.target.value)
        localStorage.setItem("meetingName", e.target.value);

    }
    function noOfPeopleAttendingHandler(e) {
        console.log(e.target.value)
        localStorage.setItem("noOfPeopleAttending", e.target.value);

    }
    function dateHandler(e) {
        console.log(e.target.value)
        localStorage.setItem("date", e.target.value);


    }
    function startTimeHandler(e) {
        console.log(e.target.value)
        localStorage.setItem("startTime", e.target.value);


    }
    function endTimeHandler(e) {

        console.log(e.target.value)
        localStorage.setItem("endTime", e.target.value);

    }
    function postDataHandler() {
        axios.post('api/v1/data ', {
            meetingName: localStorage.getItem("meetingName"),
            noOfPeopleAttending: localStorage.getItem("noOfPeopleAttending"),
            date: localStorage.getItem("date"),
            startTime: localStorage.getItem("startTime"),
            endTime: localStorage.getItem("endTime"),
        }).then((res) => {
            console.log(res)
            window.location.replace("http://localhost:3000/home");

        }).catch((error) => {
            console.log(error);
        });
    }






    return (
        <div className="table__main">
            <div className="table__main__component">
                <table border="0" cellSpacing="3">
                    <thead>
                        <tr>
                            <th class="tg-0lax">Sl. no.</th>
                            <th class="tg-0lax">Meeting name</th>
                            <th class="tg-0lax">No of people attending</th>
                            <th class="tg-0lax">Date</th>
                            <th class="tg-0lax">Start time</th>
                            <th class="tg-0lax">Endtime</th>
                            <th class="tg-0lax">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            responseData.map((data, num) => (
                                <tr>
                                    <td >{num + 1}</td>
                                    <td >{data.meetingName}</td>
                                    <td >{data.noOfPeopleAttending}</td>
                                    <td >{data.date}</td>
                                    <td >{data.startTime}</td>
                                    <td >{data.endTime}</td>
                                    <td> <DeleteIcon /></td>
                                </tr>

                            ))
                        }
                        <tr>
                            <td class="tg-0lax">  </td>
                            <td class="tg-0lax"><input onChange={meetingNameHandler} type="text" /></td>
                            <td class="tg-0lax"><input onChange={noOfPeopleAttendingHandler} type="text" /></td>
                            <td class="tg-0lax"> <input onChange={dateHandler} type="date" /></td>
                            <td class="tg-0lax"> <input type="time" onChange={startTimeHandler} /></td>
                            <td class="tg-0lax"><input type="time" onChange={endTimeHandler} /></td>
                            <td class="tg-0lax"> <button className="buttons" onClick={postDataHandler}>Add</button> </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default Table









// {
//     "meetingName": "Alfred Tonnison",
//         "noOfPeopleAttending": "10",
//             "date": "16/04/2021",
//                 "startTime": "8:00 PM",
//                     "endTime": "10:00 PM"
// }