// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">Why Choose Us?</h1>
      <div className="content-section">
        <div className="text-content">
          <p>360 event planner specializes in organizing and executing various types of events, ranging from small gatherings to large-scale conferences and weddings. Their primary role is to ensure that every aspect of an event is meticulously planned and flawlessly executed to create a memorable experience for attendees. 360Event planners work closely with clients to understand their specific requirements, objectives, and budget constraints, and then use their expertise to bring those visions to life.  Firstly, our company boasts a team of experienced professionals dedicated to making your special day unforgettable. From planning intricate details to executing flawlessly on the day, we ensure a stress-free experience for our clients.
          </p>
        </div>
        <div className="image-content">
          <img src="/images/about_3.jpg" alt="Contact" />
        </div>
      </div>
      
      <div className="content-section reverse">
        <div className="image-content">
          <img src="/images/corpo_3.jpg" alt="Contact" />
        </div>
        <div className="text-content">
          <p>Specializes in event management, prioritizing customer satisfaction above all else. With meticulous attention to detail and personalized service, we ensure every client’s happiness on their special day. we guarantees unparalleled satisfaction in any event management With a focus on customer happiness, we ensure flawless execution, making your special day truly memorable.

          we are professional event planner ensure utmost customer satisfaction. With meticulous planning, we guarantee to exceed your expectations. From corporate gatherings to private celebrations, our dedicated team ensures every detail is perfect, leaving customers delighted with their event experience.</p>
        </div>
      </div>
      
      <div className="content-section">
        <div className="text-content">
          <p>360 Eventplanner are responsible for selecting and booking suitable venues, managing logistics such as transportation and accommodations, coordinating with vendors and suppliers, overseeing event decorations and themes, creating detailed timelines, and managing budgets. Additionally, event planners often assist in marketing and promotional efforts to attract attendees and ensure effective communication before, during, and after the event.
          We are not only a wedding planner – we offers more than that. 360-degree Event management with additional services! we are responsible for selecting and booking suitable venues, managing logistics such as transportation and accommodations, coordinating with vendors and suppliers, overseeing event decorations and themes, creating detailed timelines, and managing budgets. Additionally, event planners often assist in marketing and promotional efforts to attract attendees and ensure effective communication before, during, and after the event.
          </p>
        </div>
        <div className="image-content">
          <img src="/images/about_1.jpg" alt="Contact" />

        </div>
      </div>
      
      <div className="content-section reverse">
        <div className="image-content">
          <img src="/images/about_2.jpg" alt="Contact" />
        </div>
        <div className="text-content">
          <p> We are event perfectionists , So you don't have to be worried. Look no further than 360 Eventplanner, where every detail of your special day is expertly crafted to perfection. </p>
        </div>
      </div>
       <div>
      <p>“The most important thing in life is to stop saying ‘I wish’ and start saying ‘I will.’ 
        Consider nothing impossible, then treat possibilities as probabilities.” </p>
        </div>
    </div>
  );
};

export default AboutUs;
