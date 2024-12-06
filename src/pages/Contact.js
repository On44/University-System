import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock form submission logic
    console.log('Form Submitted:', formData);
    setFormStatus('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <header className="contact-header"><br/>
        <h1>Contact University</h1>
        <p>We'd love to hear from you!</p>
      </header>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>

        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@dscloudcomputing.com</p>
          <p><strong>Phone:</strong> +254 794536415</p>
          <p><strong>Address:</strong> Nairobi, Kenya</p>
        </div>

        <div className="map-section">
          <h2>Our Location</h2>
          <iframe
            title="D&S Cloud Computing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4018.141909543917!2d36.82194608162259!3d-1.292065009718418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f113d4a7d8e07%3A0x5bc881ab4a8a79bb!2sNairobi%20CBD%2C%20Kenya!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;