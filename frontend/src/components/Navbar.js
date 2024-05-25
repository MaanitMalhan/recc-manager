import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header">
        <a href="https://iac.university/" className='header-img-link'>
        <img src="https://www.energy.gov/sites/default/files/styles/full_article_width/public/2018/05/f51/Industrial%20Assessment%20Center%20-%20Logo.png?itok=dNqt_m33"
        alt="Industrial Assessment Center Logo" className='header-img'/>
        </a>
        <h1>Southern New England Industrial Assessment Center Internal Tool</h1>
        <hr className="line" />
    </header>
    )};


export default Navbar;
