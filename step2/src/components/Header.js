import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { selectCurrentUser } from '../features/auth/authSlice';

const Header = () => {
    return (
        <header className="header">
            
            <div className="logo-container">
                <Link to="/" className="logo-link">
                    <FontAwesomeIcon icon={faCoffee} className="logo" />
                </Link>
                <Link to="/" className="logo-link">
                    <span className="logo-text">Cozy Corner Café</span>
                </Link>
            </div>
            <nav className="nav">
                <Link to="/menu" className="nav-link">Menu</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/favorites" className="favorites-link">
                <FontAwesomeIcon icon={faHeart} />
                <span className="sr-only">Favorites</span>
                </Link>
                <Link to="/login" className="login-link">Login</Link>
                
            </nav>
        </header>
    )
}

export default Header;
