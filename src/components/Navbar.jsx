import { HashLink as NavLink } from 'react-router-hash-link';
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <ul>
                    <li>
                        <NavLink className="header-name">Ibrohim.</NavLink>
                    </li>
                </ul>
                <ul>
                    <li><NavLink smooth to="#home" style={{ color: '#00abf0', fontWeight: "700"}}>Home</NavLink></li>
                    <li><NavLink smooth to="#about">About</NavLink></li>
                    <li><NavLink smooth to="#skills">Skills</NavLink></li>
                    <li><NavLink smooth to="#hire-me">Hire me</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar