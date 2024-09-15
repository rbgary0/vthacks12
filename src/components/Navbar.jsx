import './Navbar.css'
import Form from './Form.jsx'

function Navbar() {


    return (
        <nav className="topnav">
            <button className="buttonOption">Going To</button>
            <button className="buttonOption">Looking For</button>
            <Form/>
        </nav>
    )
}

export default Navbar
