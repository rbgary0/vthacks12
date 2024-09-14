import './Listing.css'


function Listing({ start, end, date, time }) {
    // let start = infoList.start;
    // let end = infoList.end;
    // let date = infoList.date;
    // let time = infoList.time;


    return (
        <button className="Listing">
            <div className="Info">
                <div className="InfoHeader">From</div>
                <div className="InfoContents">{start}</div>
            </div>
            <div className="Info">
                <div className="InfoHeader">To</div>
                <div className="InfoContents">{end}</div>
            </div>
            <div className="Info">
                <div className="InfoHeader">On</div>
                <div className="InfoContents">{date}</div>
            </div>
            <div className="Info">
                <div className="InfoHeader">At</div>
                <div className="InfoContents">{time}</div>
            </div>
        </button>
    )
}

export default Listing
