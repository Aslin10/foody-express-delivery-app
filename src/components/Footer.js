import React from 'react';
import './Footer.css';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-title">Foody Express</h2>
          <p className="footer-text">Delicious food delivered to your doorstep with speed and quality.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/Menu" className="footer-link">Menu</Link></li>
            <li><Link to="/About" className="footer-link">About Us</Link></li>
            <li><Link to="/Contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact</h3>
          <ul className="footer-list">
            <li>123 Food Street, Chennai, India</li>
            <li>+123 456 7890</li>
            <li>support@foodyexpress.com</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <ul className="footer-list-icon">
          <li><Link to="https://facebook.com" className="footer-link"><img src={facebook} alt="Facebook"  className="social-icon" /> </Link></li>
<li><Link to="https://twitter.com" className="footer-link"><img src={twitter} alt="Twitter" className="social-icon" /></Link></li>
<li><Link to="https://instagram.com" className="footer-link"><img src={instagram} alt="Instagram"  className="social-icon"/> </Link></li>
<li><Link to="https://whatsapp.com" className="footer-link"><img src={whatsapp} alt="WhatsApp" className="social-icon" /></Link></li>

          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="footer-copyright">
        <p>All rights reserved &copy; 2025 Foody Express. </p>
      </div>
    </footer>
  );
};


