import Popup from 'reactjs-popup';
import './Form.css'
import axios from 'axios'

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form)
    
        const formJson = Object.fromEntries(formData.entries());
      
        axios
          .post('http://127.0.0.1:8000/', formJson)
          .then(response => {
            console.log(response)
          })
      }

    return (
        <Popup
        trigger={<button className="buttonNew"> New </button>}
        modal
        nested
        >
        {close => (
          <div className="modal">
            <div className="header"> New Listing </div>
            <div className="content">
              <form onSubmit={handleSubmit} method="POST" action="http://127.0.0.1:8000/">
                <label for="start">Starting Location: </label>
                <input name="start" type="text"></input> 
                <br></br>
                <label for="end">Destination: </label>
                <input name="end" type="text"></input>
                <br></br>
                <label for="driver">Providing a ride</label>
                <input name="isDriver" type="radio" value="true"/>
                <br></br>
                <label for="rider">Looking for ride</label>
                <input name="isDriver" type="radio" value="false"/>
                <br></br>
                <label for="date">Date: </label>
                <input name="date" type="date"></input>
                <br></br>
                <label for="time">Time of Departure: </label>
                <input name="time" type="time"></input>
                <br></br>
                <label for="gas">Gas Cost: </label>
                <input name="gas" type="text"></input>
                <br></br>
                <label for="length">Est. Length of Trip: </label>
                <input name="length" type="text"></input>
                <br></br>
                <label for="capacity">Open Seats: </label>
                <input name="capacity" type="number"></input>
                <br></br>
                <label for="notes">Notes: </label>
                <textarea name="notes" type="text"></textarea>
                <br></br>
                <input type="submit"></input>
              </form>
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

export default Form