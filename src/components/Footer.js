import React from 'react';
import { Link } from 'react-router-dom';
import { PageLinks, Button } from './';
import logo from '../images/shared/desktop/logo-white.svg';
import arrow from '../images/shared/desktop/arrow-white.svg';

const Footer = () => (
    <div className="footer">
        <Link to="/">
            <img className="footer__logo" src={logo} alt="Photosnap company logo" />
        </Link>
        <div className="footer__socials">
            <a href="#" aria-label="Facebook icon">
                <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" aria-label="Youtube icon">
                <i className="fab fa-youtube" />
            </a>
            <a href="#" aria-label="Twitter icon">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Pinterest icon">
                <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" aria-label="Instagram icon">
                <i className="fab fa-instagram"></i>
            </a>
        </div>      
        <PageLinks />   
        <Button text="Get an invite" underline="white" arrow={arrow} />
        <small className="footer__copyright">Copyright 2019. All Rights Reserved.</small>
    </div>
)

export default Footer