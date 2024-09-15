import './Listing.css'
import Popup from 'reactjs-popup';


function Listing({ arr }) {
    // let start = infoList.start;
    // let end = infoList.end;
    // let date = infoList.date;
    // let time = infoList.time;


    return (

        <Popup
            trigger={<button className="Listing">
                <div className="Info">
                    <div className="InfoHeader">From</div>
                    <div className="InfoContents">{arr.start}</div>
                </div>
                <div className="Info">
                    <div className="InfoHeader">To</div>
                    <div className="InfoContents">{arr.end}</div>
                </div>
                <div className="Info">
                    <div className="InfoHeader">On</div>
                    <div className="InfoContents">{arr.date}</div>
                </div>
                <div className="Info">
                    <div className="InfoHeader">At</div>
                    <div className="InfoContents">{arr.time}</div>
                </div>
            </button>}
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <div className="header"> Listing </div>
                    <div className="content">
                        <div className="popInfo">
                            <div className="popHeader">From:</div>
                            <div className="popContents">Your moms house</div>
                        </div>
                        <div className="popInfo">
                            <div className="popHeader">To:</div>
                            <div className="popContents">Your moms house</div>
                        </div>
                        <div className="popInfo">
                            <div className="popHeader">isDriver:</div>
                            <div className="popContents">Your moms house</div>
                        </div>
                        <div className="popInfo">
                            <div className="popHeader">Date:</div>
                            <div className="popContents">Your moms house</div>
                        </div>
                        <div className="popInfo">
                            <div className="popHeader">Time:</div>
                            <div className="popContents">Your moms house</div>
                        </div>
                        <div className="popInfo">
                            <div className="popHeader">Gas:</div>
                            <div className="popContents">Your moms house</div>
                        </div>
                        <div className="popInfo">
                            <div className="popHeader">Est Length of Trip:</div>
                            <div className="popContents">Your moms house</div>
                        </div>
                        <div className="popInfo">
                            <div className="popHeader">Open Seats:</div>
                            <div className="popContents">Your moms house</div>
                        </div>
                        <div className="popInfo">
                            <div className="popHeader">Notes:</div>
                            <div className="popContents">Your moms house</div>
                        </div>
                    </div>
                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            Exit
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    )
}

export default Listing
