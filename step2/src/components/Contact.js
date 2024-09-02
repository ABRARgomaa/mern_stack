import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './Contactform';

const Contact = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="main-content contact-page">
                <h1>Contact Us</h1>
                <p>If you have any questions or feedback, feel free to reach out to us. Fill out the form below, and we'll get back to you as soon as possible.</p>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;