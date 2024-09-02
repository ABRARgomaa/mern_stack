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
                        <a href="https://wa.me/201026867665" className="footer-link">
                            +20 102 686 7665
                        </a>
                    </p>
                </div>
                <div className="footer__item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>
                        <a href="mailto:abrargomaa111@gmail.com" className="footer-link">
                            abrargomaa111@gmail.com
                        </a>
                    </p>
                </div>
                <div className="footer__item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>
                        <a 
                          href="https://www.google.com/maps?q=43+Anywhere+St,+Anycity"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link"
                        >
                            1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
                        </a>
                    </p>
                </div>
            </div>
            <p className='small'>© 2024 Cozy Corner Café. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
