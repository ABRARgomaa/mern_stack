import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Public = () => {
    return (
        <section className="public">
            <header className="public__header">
                <div className="logo-container">
                    <FontAwesomeIcon icon={faCoffee} className="logo" />
                    <h1>Coffee</h1>
                </div>
                <nav className="public__nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/coffee" className="nav-link">Coffee</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/login" className="login-link">Login</Link>
                </nav>
            </header>
            <main className="public__main">
                <h2>Start The Day With Great Taste</h2>
                <p>Your daily dose of freshly brewed coffee awaits.</p>
                <button className="special-button">Today's Special</button>
            </main>
        </section>
    );
};

export default Public;
