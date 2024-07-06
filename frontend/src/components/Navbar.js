import { Link } from 'react-router-dom';
import uconn_white from '../Assets/uconn_white.png';

const Navbar = () => {
    return (
        <header className="header">
        <a href="https://uconn.edu/" className='header-img-link'>
        <img src={uconn_white}
        alt="UConn Logo" className='header-img'/>
        </a>
        <h1>Southern New England Industrial Assessment Center Internal Tool</h1>
        <nav>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </nav>
    </header>
    )};


export default Navbar;
