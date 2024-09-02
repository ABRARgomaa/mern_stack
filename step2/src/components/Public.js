import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

const FeatureBox = ({ icon, title, description }) => (
    <div className="feature-box">
        <FontAwesomeIcon icon={icon} className="feature-icon" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const Public = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="public__main">
                <div className="hero-section">
                    <h1>Welcome to Cozy Corner Café</h1>
                    <p>Keep calm and grab coffee</p>
                    <Link to="/order">
                        <button className="order-button">Order Now</button>
                    </Link>
                </div>
                <div className="feature-section">
                    <FeatureBox 
                        icon={faCoffee}
                        title="Premium Coffee"
                        description="Enjoy our selection of locally roasted, artisanal coffee blends."
                    />
                    <FeatureBox 
                        icon={faMapMarkerAlt}
                        title="Cozy Atmosphere"
                        description="Relax in our warm, inviting space designed for comfort."
                    />
                    <FeatureBox 
                        icon={faEnvelope}
                        title="Weekly Specials"
                        description="Subscribe to our newsletter for exclusive offers and events."
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Public;