import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';
import { reaction } from 'mobx';
import sessionStore from '../../stores/sessionStore/sessionStore';
import { Redirect } from 'react-router-dom';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    home: 'Home',
    login: 'Login',
    register: 'Register'
}

const Header = (props) => {

    const [activeLink, setActiveLink] = useState(getRoute());
    const [showLogoutBtn, setShowLogoutBtn] = useState(false);
    const session = props.sessionStore;

    reaction(
        () => session.isActive,
        (active) => {
            setShowLogoutBtn(active);
            if (!active) {
                session.sessionKill();
            }
        }
    );

    useEffect(() => {
        setActiveLink(getRoute());
        setShowLogoutBtn(session.isActive);
    }, [showLogoutBtn,activeLink,session]);

    function getRoute() {
        var routeBase = window.location.pathname.toString().substr(1);
        const routeTransformed = routeBase.replace(routeBase.charAt(0), routeBase.charAt(0).toUpperCase());
        return routeTransformed;
    }

    const useOnNavClick = (updateValue) => {
        setActiveLink(updateValue.target.textContent.toString());
    }

    const classNameFormatHelper = (navItemValue) => {
        if (navItemValue === activeLink) {
            return "Header-NavLink_active";
        }
        return "Header-NavLink";
    }

    const handleLogout = () => {
        session.sessionKill();
    }

    return (
        <header className="Header">
            <div className="Header-Inner">
                <div className="LogoContainer"></div>
                <nav className="Header-Nav">
                    <ul className="Header-NavList">
                        <li className="Header-NavListItem_hangaba" key="1"><Link className="Header-NavLink_hangaba" to="/"><FontAwesomeIcon className="_hangaba" icon={faBars} /></Link></li>
                        {showLogoutBtn && <li className="Header-NavListItem" key="2"><Link className={classNameFormatHelper(links.events)} to="/events" onClick={useOnNavClick} >{links.events}</Link></li>}
                        {showLogoutBtn && <li className="Header-NavListItem" key="3"><Link className={classNameFormatHelper(links.speakers)} to="/speakers" onClick={useOnNavClick}  >{links.speakers}</Link></li>}
                        <li className="Header-NavListItem" key="4"><Link className={classNameFormatHelper(links.home)} to="/" onClick={useOnNavClick} >{links.home}</Link></li>
                        {!showLogoutBtn && <li className="Header-NavListItem" key="5"><Link className={classNameFormatHelper(links.login)} to="/login" onClick={useOnNavClick}  >{links.login}</Link></li>}
                        {!showLogoutBtn && <li className="Header-NavListItem" key="6"><Link className={classNameFormatHelper(links.register)} to="/register" onClick={useOnNavClick} >{links.register}</Link></li>}
                        {showLogoutBtn && <button onClick={handleLogout}>LOGOUT</button>}
                        {!showLogoutBtn && activeLink === 'Events' && <Redirect to='/login' />}
                        {!showLogoutBtn && activeLink === 'Speakers' && <Redirect to='/login' />}
                        {showLogoutBtn && activeLink === 'Login' && <Redirect to='/' />}
                        {showLogoutBtn && activeLink === 'Register' && <Redirect to='/' />}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

function mapServicesToProps() {
    return {
        sessionStore
    }
}

export default inject(mapServicesToProps)(observer(Header));