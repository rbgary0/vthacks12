import './Navbar.css'
import Form from './Form.jsx'
import placeholder from './placeholder.png'; // Import your logo image

function Navbar() {
    return (
        <nav className="topnav">
            <div className="align-left">
                <img src={placeholder} alt="Logo" className="logo" />
            </div>
            <div id="wrapper">
                <button className="buttonOption">Going To</button>
                <button className="buttonOption">Looking For</button>
                <Form/>
            </div>
        </nav>
    )
}

export default Navbar
