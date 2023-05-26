import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='logo-newsletter-container'>

        <div className="logo">
          <img role='company logo' src="images\main logo.png" alt="company logo" className="logo" />
        </div>

        <div className="newsletter-form">

          <h3>Subscribe to our newsletter</h3>

          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>

        </div>

      </div>
      <div className='address-social-container-flex'>
        <div className="address">
          <h3>Visit us at our office</h3>
          <p>123 Main Street, Anytown USA</p>
          <a href="https://maps.google.com">View on map</a>
        </div>
        <div className="social-links">
          <h3>Follow us on social media</h3>
          <ul>
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2021 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

