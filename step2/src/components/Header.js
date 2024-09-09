import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { selectIsLoggedIn, selectCurrentUser } from '../features/auth/authSlice';
import { useLogoutMutation } from '../features/auth/authApiSlice';
const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();
    const handleLogout = async () => {
        try {
          await logout().unwrap();
          navigate('/');
        } catch (err) {
          console.error('Failed to log out:', err);
        }
      };
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
            <nav className='nav'>
        <Link to="/menu" className='nav-link'>Menu</Link>
        <Link to="/about" className='nav-link'>About</Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
        {isLoggedIn && (
          <Link to="/favorites" className="favorites-link">
            <FontAwesomeIcon icon={faHeart} />
            <span className="sr-only">Favorites</span>
          </Link>
        )}
        {isLoggedIn ? (
          <>
            <Link to="/order" className="order-button">Order Now</Link>
            {currentUser && (
              <div className="user-info">
                <FontAwesomeIcon icon={faUser} />
                <span>{currentUser.name}</span>
              </div>
            )}
            <button onClick={handleLogout} className="logout-button">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <Link to="/login" className="login-link">Login</Link>
        )}
      </nav>
        </header>
    )
}

export default Header;
