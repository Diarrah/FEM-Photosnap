import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { PageLinks, Button } from './';
import logo from '../images/shared/desktop/logo.svg';
import open from '../images/shared/mobile/menu.svg';
import close from '../images/shared/mobile/close.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navDeployment = useRef();
    const { body } = document;

    useEffect(() => {
        handleMobileNavClick()
    }, [])
        
    const mobileNavOpen = () => {
        navDeployment.current.classList.add('change')
        body.style.overflowY = 'hidden';
        body.parentElement.style.overflowY = 'hidden';
    }

    const mobileNavClose = () => {
        setTimeout(function() {
            navDeployment.current.classList.remove('change')
        }, 850);
        body.style.overflowY = 'visible';
        body.parentElement.style.overflowY = 'visible';
    }

    const handleMobileNavClick = () => {
        let menu = document.querySelector('.navbar__mobile__menu'),
            menuChildren = [...menu.children[0].children].concat(menu.children[1]);

        menuChildren.forEach(child => child.addEventListener('click', () => {
            closeAll();
        }));
    }

    const closeAll = () => {
        setMenuOpen(false);
        mobileNavClose();
    }

    return (
        <div className="navbar">
            <Link to="/" onClick={() => closeAll()}>
                <img className="navbar__logo" src={logo} alt="Photosnap company logo" />
            </Link>
            <div className="navbar__links">
                <PageLinks />
            </div>
            <Button text="Get an invite" />
            <a href="#" className="navbar__mobile__btn" ref={navDeployment} aria-label="Button for mobile menu deployment" onClick={() => setMenuOpen(!menuOpen)}>
                <img 
                    className="navbar__mobile__btn--open" 
                    src={open} 
                    onClick={mobileNavOpen} 
                    alt="" 
                />
                <img 
                    className={`navbar__mobile__btn--close ${!menuOpen ? 'spin' : ''}`} 
                    src={close} 
                    onClick={mobileNavClose}
                    alt="" 
                />
            </a>
            <div className={`navbar__mobile__menu ${menuOpen ? 'deployed' : ''}`} onClick={handleMobileNavClick}>
                <PageLinks />
                <Button text="Get an invite" />
            </div>
            <div className={`overlay ${menuOpen ? 'active' : ''}`} />
        </div>
    )
}

export default Navbar