import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the form data to the backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Your message has been sent!');
      setFormData({ name: '', email: '', password: '', message: '' }); // Clear the form
    } else {
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="contact-form-container">
      <section className="contact-info">
        <div className="contact-info-box">
          <h2>Get in Touch</h2>
          <p>
            <strong>Phone:</strong> 
            <a href="https://wa.me/201026867665" className="contact-link">
              +20 102 686 7665
            </a>
          </p>
          <p>
            <strong>Email:</strong> 
            <a href="mailto:contact@cozycornercafe.com" className="contact-link">
              abrargomaa111@gmail.com
            </a>
          </p>
          <p><strong>Address:</strong> 123 Coffee Lane, Bean Town, CA 90210</p>

          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
