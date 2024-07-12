import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import Service from './Service';
import ContactUs from './ContactUs';
import Button from '@mui/material/Button';

const Header = () => {
    const navigate = useNavigate();
  
    const handleBookNowClick = () => {
      navigate('/eventcreation');
    };
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.jpg" alt="Logo" className="logo" />
        <h1 className="logo-text">EventPLanner</h1>
      </div>
      <div>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/services"><Service/></Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contactus"><ContactUs/></Link></li>
        </ul>
      </nav>
      </div>
      <div className="social-buttons">
        <a href="https://www.linkedin.com/in/sakshi-gupta-a0562b21a/" className="social-icon li-icon">in</a>
      </div>
      <Button className="book-now" variant="contained" onClick={handleBookNowClick}>BOOK NOW</Button>
    </header> 
    

  );
};

export default Header;
