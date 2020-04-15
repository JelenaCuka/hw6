import React from 'react';
import { Link } from 'react-router-dom';
//import Logo from '../../assets/img/logo.png';
import './Header.scss';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    home: 'Home',
}

const Header = () => {
    return (
        <header className="Header">
        <div className="Header-Inner">
        {/*<Link to="/" className="LogoContainer">
        <img className="LogoContainer-Image" src={Logo} alt="Logo" />
        </Link>*/}
            <div className="LogoContainer"></div>
            <nav className="Header-Nav">
                <ul className="Header-NavList">
                    <li className="Header-NavListItem"><Link className="Header-NavLink" to="/events">{links.events}</Link></li>
                    <li className="Header-NavListItem"><Link className="Header-NavLink" to="/speakers">{links.speakers}</Link></li>
                    <li className="Header-NavListItem"><Link className="Header-NavLink" to="/">{links.home}</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;