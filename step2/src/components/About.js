import Footer from "./Footer";
import Header from "./Header";

const About = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
            <p className="about-paragraph">
            Welcome to Cozy Corner Café, where the aroma of freshly brewed coffee greets you at the door and the warmth of our inviting atmosphere makes you feel right at home. Nestled in the heart of the community, our café is more than just a place to grab a cup of coffee—it's a gathering spot for friends, a quiet nook for readers, and a haven for those who appreciate the art of a perfectly crafted brew. From our rich, bold espresso to our delicate, hand-selected teas, every drink is made with care, using only the finest ingredients. Whether you're here to relax, catch up with friends, or find inspiration for your next big idea, Cozy Corner Café is your go-to destination for comfort, quality, and connection.
            </p>
                {/* Add your About content here */}
            </main>
            <Footer />
        </div>
    );
}

export default About;