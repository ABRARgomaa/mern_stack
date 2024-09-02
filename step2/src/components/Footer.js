import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__item">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>+2234-333-560</p>
                </div>
                <div className="footer__item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>coffeeshop@gmail.com</p>
                </div>
                <div className="footer__item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>43 Anywhere St. Anycity</p>
                </div>
            </div>
            <p>© 2024 Cozy Corner Café. All rights reserved.</p>
        </footer>
    )
}

export default Footer;