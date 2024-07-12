import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './ContactUs.css';
import { createEvent } from '../services/api';

const EventCreation = () => {
  const [event, setEvent] = useState({
    name: '',
    date: '',
    location: '',
    guest: '',
    budget: '',
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(event);
      setEvent({
        name: '',
        date: '',
        location: '',
        guest: '',
        budget: '',
      });
      alert("Event created successfully!")
    } catch (error) {
      alert("Error in event creation", error);
    }
  };

  return (
    <div className="contact-us-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 style={{ marginLeft: '150px', paddingInline: '30px' }}>Create Event</h2>
        <div className="form-group">
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={event.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Event Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Event Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={event.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guest">What is your approximate guest count?</label>
          <input
            type="text"
            id="guest"
            name="guest"
            value={event.guest}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="budget">What is your approximate budget?</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={event.budget}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" style={{ marginLeft: '170px' }} variant="contained">
          Create Event
        </Button>
      </form>
      <div className="contact-image">
        <img src="/images/Logo1.webp" alt="event-creation" />
      </div>
    </div>
  );
};

export default EventCreation;
