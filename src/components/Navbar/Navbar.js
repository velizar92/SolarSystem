import { Link } from 'react-router-dom';
import './navbar.css';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">Solar System</Link>

            <input type="checkbox" id="check" />
            <label for="check" className="icons">
                <FontAwesomeIcon id="menu-icon" icon={faBars} />
                <FontAwesomeIcon id="close-icon" icon={faX} />
            </label>
            
            <nav className="navbar">
                <Link className="active-menu-option" to="/">Home</Link>
                <Link to="/planets">Planets</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>);
}

export default Navbar;