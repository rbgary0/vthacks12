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
              <br />
              <div className="radio-group">
                <label>
                  <input name="isDriver" type="radio" value="true" />
                  <span className="radio-label">Providing a ride</span>
                </label>
                <label>
                  <input name="isDriver" type="radio" value="false" />
                  <span className="radio-label">Looking for ride</span>
                </label>
              </div>
              <br />
              <label for="date">Date: </label>
              <input name="date" type="date"></input>
              <br></br>
              <label for="time">Time of Departure: </label>
              <input name="time" type="time"></input>
              <br />
              <div className="flex-row">
                <div>
                  <label htmlFor="gas">Gas Cost: </label>
                  <input name="gas" type="text" className="money-input" />
                </div>
                <div>
                  <label htmlFor="capacity">Open Seats: </label>
                  <input name="capacity" type="number" className="small-integer" />
                </div>
              </div>
              <br />
              <div className="length-container">
                <label htmlFor="length">Estimated Length of Trip: </label>
                <input name="length" type="text" className="small-integer" />
                <select name="lengthUnit" className="length-select">
                  <option value="seconds">Second/s</option>
                  <option value="minutes">Minute/s</option>
                  <option value="hours">Hour/s</option>
                  <option value="days">Day/s</option>
                  <option value="weeks">Week/s</option>
                </select>
              </div>
              <br />
              <label htmlFor="notes">Notes: </label>
              <textarea name="notes" type="text" className="large-text"></textarea>
              <br />
              <div className="actions">
                <button type="submit" className="submit-button">Submit</button>
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
            </form>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default Form