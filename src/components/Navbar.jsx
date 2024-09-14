import './Navbar.css'
import Form from './Form.jsx'

function Navbar() {


    return (
        <div className="topnav">
            <button className="buttonOption">Going To</button>
            <button className="buttonOption">Looking For</button>
            {/* <button className="buttonNew">New</button> */}
            <Form/>
        </div>
    )
}

export default Navbar
