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


    // const promise = axios.get('http://127.0.0.1:8000/')
    // console.log(promise)
    // promise.then(response => {
    //     console.log(response)
    //     console.log(response.data)
    // })

    const testArr = [
        {
            start: "idk",
            end: "also idk",
            date: "1/2/3",
            time: "1:00"
        }
    ]


    return (
        <div>
            <div className="ListingsGrid">
                <Listing start={testArr[0].start} end={testArr[0].end} date={testArr[0].date} time={testArr[0].time}/>
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
            </div>
        </div>
    )
}

export default ListingsGrid
