import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const DashHeader = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onGoHomeClicked = () => navigate('/');

    let goHomeButton = null;
    if (pathname === '/coffee') {
        goHomeButton = (
            <button
                className="dash-header__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        );
    }

    return (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/coffee">
                    <h1 className="dash-header__title">Coffee</h1>
                </Link>
                <nav className="dash-header__nav">
                    {goHomeButton}
                </nav>
            </div>
        </header>
    );
};

export default DashHeader;
