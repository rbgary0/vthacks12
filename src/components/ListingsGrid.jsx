import './ListingsGrid.css'
import Listing from './Listing.jsx'
// import Button from './Button.jsx'
import React, { useState } from "react";


function ListingsGrid() {

    // const [listings, setListings] = useState([]);

    // const addListing = () => {
    //     setListings([...listings, <Listing />]);
    // }

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
