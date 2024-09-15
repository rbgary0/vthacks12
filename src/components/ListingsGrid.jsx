import './ListingsGrid.css'
import Listing from './Listing.jsx'
// import Button from './Button.jsx'
import React, { useState, useEffect } from "react";
import axios from 'axios';


function ListingsGrid() {

    const [data, setData] = useState([])
    const [showDriver, setShowDriver] = useState(true)


    useEffect(() => {
        console.log('effect');
        axios.get('http://127.0.0.1:8000/').then(response => {
            console.log('fufillied')
            setData(response.data)
        })
    }, [])
    console.log('render', data.length, 'notes')

    const cardsToShow = showDriver ? data.filter(entry => entry.isDriver === "true") : data.filter(entry => entry.isDriver === "false")

    return (
        <div>
            <div className="ListingsGrid">
                <div>
                    <button onClick={() => setShowDriver(!showDriver)}>
                        show {showDriver ? 'Driving' : 'Looking for a ride'}
                    </button>
                </div>
                {cardsToShow.map((entry, index) => (
                    <div id={index}>
                        <Listing start={entry.start} end={entry.end} isDriver={entry.isDriver}
                            date={entry.date} time={entry.time} gas={entry.gas}
                            length={entry.length} capacity={entry.capacity} notes={entry.notes} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ListingsGrid
