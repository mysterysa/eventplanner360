import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './ContactUs.css';
import { createVendor } from '../services/api';

const VendorCoordination = () => {
  const [vendor, setVendor] = useState({
    name: '',
    service: '',
  });
  

  const handleChange = (e) => {
    setVendor({
      ...vendor,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createVendor(vendor);
      setVendor({
        name: '',
        service: '',
      });
      alert("Vendor created successfully!")
    } catch (error) {
      alert("Error in vendor creation", error);
    }
  };

  return (
    <div className="contact-us-container">
    <form className="contact-form" onSubmit={handleSubmit}>
    <h2 style= {{marginLeft: "150px", paddingInline: "30px"}}>Add Vendor</h2>
        <div className="form-group">
          <label htmlFor="name">Vendor Name:</label>
          <input type="text" id="name" name="name" value={vendor.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label  htmlFor="service">Service:</label>
          <input type="text" id="service" name="service" value={vendor.service} onChange={handleChange} required />
        </div>
        <Button type="submit" style= {{marginLeft: "170px"}} variant="contained">Add Vendor</Button>
      </form>
      <div className="contact-image" style={{height: '600px', marginTop: '30px'}}>
        <img src="/images/Logo1.webp" alt="vendor_image"/>
      </div>
    </div>
  );
};

export default VendorCoordination;
