import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
            <header className="header">
                <div className="logo-container">
                    <FontAwesomeIcon icon={faCoffee} className="logo" />
                    <h1>coffee</h1>
                </div>
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/menu" className="nav-link">menu</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/login" className="login-link">Login</Link>
                </nav>
            </header>
    )
}
export default Header;