import uconn_white from '../Assets/uconn_white.png';

const Navbar = () => {
    return (
        <header className="header">
        <a href="https://uconn.edu/" className='header-img-link'>
        <img src={uconn_white}
        alt="UConn Logo" className='header-img'/>
        </a>
        <h1>Southern New England Industrial Assessment Center Internal Tool</h1>
    </header>
    )};


export default Navbar;
