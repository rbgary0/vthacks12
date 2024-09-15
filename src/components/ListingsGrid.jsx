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

    let count = 0

    const promise = axios.get('http://127.0.0.1:8000/')
    console.log(promise)
    console.log(count)
    count += 1


    return (
        <div>
            <div className="ListingsGrid">
                <Listing start="start" end="end" date="date" time="time" />
                <Listing />
                <Listing />
                <Listing />
                <Listing />
            </div>
        </div>
    )
}

export default ListingsGrid
