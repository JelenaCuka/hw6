import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Header.css';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    clock: 'Clock',
}

const Header = () => {
    return (
        <header class="header">
        <div class="maxWidth1280">
        {/*<Link to="/" className="">
        <img className="" src={Logo} alt="Logo" />
        </Link>*/}
            <div class="logoLeft"></div>
            <nav class="navigation">
                <ul>
                    <li><Link className="" to="/events">{links.events}</Link></li>
                    <li><Link className="" to="/speakers">{links.speakers}</Link></li>
                    <li><Link className="" to="/clock">{links.clock}</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;