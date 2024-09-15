import './Navbar.css'
import Form from './Form.jsx'
import placeholder from './placeholder.png'; // Import your logo image

function Navbar() {
    return (
        <nav className="topnav">
            <div className="align-left">
                <img src={placeholder} alt="Logo" className="logo" />
                <div className="company-name"> HokiePool </div>
            </div>
            <Form/>
        </nav>
    )
}

export default Navbar
