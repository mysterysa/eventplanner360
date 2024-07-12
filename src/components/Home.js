import React from 'react';
import ImageSlider from './ImageSlider';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="slider-wrapper">
        <ImageSlider />
        
      </div>
      <p>360 event planner specializes in organizing and executing various types of events, ranging from small gatherings to large-scale conferences and weddings. Their primary role is to ensure that every aspect of an event is meticulously planned and flawlessly executed to create a memorable experience for attendees. 360Event planners work closely with clients to understand their specific requirements, objectives, and budget constraints, and then use their expertise to bring those visions to life. event management is the art of taking an event plan or idea and turning it into reality. </p>
    </div>
    
  );
  
};

export default Home;
