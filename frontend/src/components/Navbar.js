import { Link } from 'react-router-dom';
import uconn_white from '../Assets/uconn_white.png';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    

    return (
        <header className="header">
        <a href="/" className='header-img-link'>
        <img src={uconn_white}
        alt="UConn Logo" className='header-img'/>
        </a>
        <h1 className='navHeading'>Southern New England Industrial Assessment Center Internal Tool</h1>
        <nav>
            {user &&(
                <div className='userInfo'>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log Out</button>
                    <Link to= "/CSVpage">CSV page</Link>
                </div>
            )}
            {!user && (
                <div>
                    <Link to="/login">Login</Link>
                    {/* <Link to="/signup">Signup</Link> */}
                </div>
            )}
        </nav>
    </header>
    )};


export default Navbar;
