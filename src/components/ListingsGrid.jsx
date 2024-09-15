import './ListingsGrid.css'
import Listing from './Listing.jsx'
// import Button from './Button.jsx'
import React, { useState } from "react";
import axios from 'axios';


function ListingsGrid() {

    // const [listings, setListings] = useState([]);

    // const addListing = () => {
    //     setListings([...listings, <Listing />]);
    // }


    const promise = axios.get('http://127.0.0.1:8000/')
    console.log(promise)
    let data = []
    promise.then(response => {
        console.log(response)
        console.log(response.data)
        data = response.data
    })

    // const testArr = [
    //     {
    //         start: "idk",
    //         end: "also idk",
    //         date: "1/2/3",
    //         time: "1:00"
    //     },
    //     {
    //         start: "idk",
    //         end: "also idk",
    //         date: "1/2/3",
    //         time: "1:00"
    //     },
    //     {
    //         start: "idk",
    //         end: "also idk",
    //         date: "1/2/3",
    //         time: "1:00"
    //     },
    //     {
    //         start: "idk",
    //         end: "also idk",
    //         date: "1/2/3",
    //         time: "1:00"
    //     }
    // ]


    return (
        <div>
            <div className="ListingsGrid">
                {data.map((entry, index) => (
                    <div id={index}>
                        <Listing start={entry.start} end={entry.end} date={entry.date} time={entry.time}/>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ListingsGrid
