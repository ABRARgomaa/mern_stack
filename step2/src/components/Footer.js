import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__item">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>(123) 456-7890</p>
                </div>
                <div className="footer__item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>123 Coffee Lane, Brewtown</p>
                </div>
                <div className="footer__item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>contact@coffee-shop.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
