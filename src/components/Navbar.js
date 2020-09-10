import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { PageLinks, Button } from './';
import logo from '../images/shared/desktop/logo.svg';
import open from '../images/shared/mobile/menu.svg';
import close from '../images/shared/mobile/close.svg';

const Navbar = () => {
    const [symbol, setSymbol] = useState(),
          [overlay, setOverlay] = useState(),
          [mobileMenu, setMobileMenu] = useState(),
          { body } = document;

    useEffect(() => {
        setSymbol(document.querySelector('.navbar__mobile__btn'));
        setOverlay(document.querySelector('.overlay'));
        setMobileMenu(document.querySelector('.navbar__mobile__menu'));  
    }, [])     
        
    const mobileNavOpen = () => {
        symbol.classList.add('change');
        symbol.children[1].classList.remove('spin');
        mobileMenu.classList.add('deployed');
        overlay.classList.add('active');
        body.style.overflowY = 'hidden';
        body.parentElement.style.overflowY = 'hidden';
        hideMobileNav()
    }

    const mobileNavClose = () => {
        setTimeout(function() {
            symbol.classList.remove('change')
        }, 850);
        symbol.children[1].classList.add('spin');
        mobileMenu.classList.remove('deployed');
        mobileMenu.style.transitionDelay = '450ms';
        overlay.classList.remove('active');
        overlay.style.transitionDelay = '450ms';
        body.style.overflowY = 'visible';
        body.parentElement.style.overflowY = 'visible';
    }

    const hideMobileNav = () => {
        let allMobileMenuItems = [...mobileMenu.children[0].children].concat(mobileMenu.children[1]);

        allMobileMenuItems.forEach(link => link.addEventListener('click', () => {
            mobileNavClose()
        }))
    }

    return (
        <div className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="Photosnap company logo" />
            </Link>
            <div className="navbar__links">
                <PageLinks />
            </div>
            <Button text="Get an invite" />
            <a href="#" className="navbar__mobile__btn" aria-label="Button for mobile menu deployment">
                <img className="navbar__mobile__btn--open" src={open} onClick={mobileNavOpen} alt="" />
                <img className="navbar__mobile__btn--close" src={close} onClick={mobileNavClose} alt="" />
            </a>
            <div className="navbar__mobile__menu" onClick={hideMobileNav}>
                <PageLinks />
                <Button text="Get an invite" />
            </div>
            <div className="overlay" />
        </div>
    )
}

export default Navbar