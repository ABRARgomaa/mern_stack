import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

const Public = () => {
    return (
        <section className="public">
            <Header />
            <main className="public__main">
                <h2>Start The Day With Great Taste</h2>
                <p>Your daily dose of freshly brewed coffee awaits.</p>
                <button className="special-button">Today's Special</button>
            </main>
        </section>
    );
};

export default Public;
