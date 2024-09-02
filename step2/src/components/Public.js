import Footer from './Footer';
import Header from './Header';

const Public = () => {
    return (
        <>
        <section className="public">
            <Header />
            <main className="public__main">
                <h2>Start The Day With Great Taste</h2>
                <p>Your daily dose of freshly brewed coffee awaits.</p>
                <button className="special-button">Today's Special</button>
            </main>
            
        </section>
        <Footer />
        </>
    );
};

export default Public;
