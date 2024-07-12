import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about-us">
        <h3>ABOUT US</h3>
        <p>Firstly, our company boasts a team of experienced professionals dedicated to making your special day unforgettable. From planning intricate details to executing flawlessly on the day, we ensure a stress-free experience for our clients.</p>
      </div>
      <div className="footer-section quick-links">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a href="http://localhost:3000/aboutus">About Us</a></li>
          <li><a href="http://localhost:3000/engagement">Service</a></li>
          <li><a href="http://localhost:3000/gallery">Gallery</a></li>
          <li><a href="http://localhost:3000/eventcreation">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section services">
        <h3>SERVICES</h3>
        <ul>
          <li>Engagement Planning</li>
          <li>Wedding Events</li>
          <li>Corporate Events</li>
          <li>Artist management</li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>CONTACT US</h3>
        <p>Renukoot<br />
          Sonbhadra, UP<br />
          231217</p>
        <p>Phone: 8048445443</p>
        <p>Email: sgweddingplan@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
