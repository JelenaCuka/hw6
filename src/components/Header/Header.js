import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    home: 'Home',
}

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Inner">
                <div className="LogoContainer"></div>
                <nav className="Header-Nav">
                    <ul className="Header-NavList">
                        <li className="Header-NavListItem_hangaba" key="1"><Link className="Header-NavLink_hangaba" to="/"><FontAwesomeIcon className="_hangaba" icon={faBars} /></Link></li>
                        <li className="Header-NavListItem" key="2"><Link className="Header-NavLink" to="/events">{links.events}</Link></li>
                        <li className="Header-NavListItem" key="3"><Link className="Header-NavLink" to="/speakers">{links.speakers}</Link></li>
                        <li className="Header-NavListItem" key="4"><Link className="Header-NavLink" to="/">{links.home}</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;