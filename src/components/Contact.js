import React from 'react';

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
    

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    };
  
    return (
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">Have any questions? Reach out to us!</p>
  
        <div className="contact-grid">
          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="icon" />
              <p>123 Food Street, Chennai, India.</p>
            </div>
            <div className="contact-item">
              <Phone className="icon" />
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="contact-item">
              <Mail className="icon" />
              <p>support@foodyexpress.com</p>
            </div>
          </div>
  
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="input-field"
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
  )};

