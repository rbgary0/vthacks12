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
    promise.then(response => {
        console.log(response)
        console.log(response.data)
    })


    return (
        <div>
            <div className="ListingsGrid">
                <Listing arr={response.data[0]} />
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
