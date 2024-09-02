import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const DashHeader = () => {
    const { pathname } = useLocation();

    let goHomeButton = null;
    if (pathname === '/coffee') {
        goHomeButton = (
            <Link to="/" className="nav-link">Home</Link>
        );
    }

    return (
        <section className="dash">
            <header className="dash-header">
                <div className="dash-header__container">
                    <div className="logo-container">
                        <FontAwesomeIcon icon={faCoffee} className="logo" />
                        <h1>Coffee</h1>
                    </div>
                    <nav className="dash-header__nav">
                            {goHomeButton}
                    </nav>
                    </div>
            </header>
        </section>
    );
};

export default DashHeader;
