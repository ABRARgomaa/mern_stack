import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__item">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>
                        <a href="https://wa.me/2234333550" className="footer-link">
                        +20 102 686 7665
                        </a>
                    </p>
                </div>
                <div className="footer__item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>
                        <a href="mailto:coffeeshop@gmail.com" className="footer-link">
                            abrargomaa111@gmail.com
                        </a>
                    </p>
                </div>
                <div className="footer__item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>43 Anywhere St. Anycity</p>
                </div>
            </div>
            <p className='small'>© 2024 Cozy Corner Café. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
