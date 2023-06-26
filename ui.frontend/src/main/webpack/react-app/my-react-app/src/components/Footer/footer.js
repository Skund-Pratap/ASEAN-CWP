import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="column">
          <h3>Memberships</h3>
          <ul>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Sign Up</li>
            <li>Devices</li>
          </ul>
        </div>
        <div className="column">
          <h3>Shows</h3>
          <ul>
            <li>Popular</li>
            <li>Bands</li>
            <li>World Class DJs</li>
            <li>Solo Artists</li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact</h3>
          <ul>
            <li>Support</li>
            <li>Customer Service</li>
            <li>Help &amp; Guide</li>
          </ul>
        </div>
        <div className="column">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="column">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="column">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="footer-line" />
        <p>© 2020 Demo Site. Intended only as a demonstration of Adobe Experience Manager</p>
      </div>
    </footer>
  );
};

export default Footer;