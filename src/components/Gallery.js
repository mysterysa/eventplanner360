// Gallery.js
import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "/images/third_image.jpeg",
    "/images/first_image.webp",
    "/images/fourth_image.jpg",
    "/images/second_image.jpg",
    "/images/first_image.webp",
    "/images/1_img.webp",
    "/images/1img0.webp",
    "/images/2_img.webp",
    "/images/3_img.webp",
    "/images/4_img.webp",
    "/images/5_img.webp",
    "/images/corpo_4.jpg",
    "/images/6_img.webp",
    "/images/7_img.jpg",
    "/images/8_img.jpg",
    "/images/9_img.jpg",
    "/images/13_img.jpg",
    "/images/11_img.webp",
    "/images/12_img.jpg",
    "/images/13_img.jpg",
    "/images/x_img.jpg",
    "/images/y_img.jpg",
    "/images/z_img.jpg",
    "/images/14_img.jpg",


  ];

  return (
    <div className="gallery-page">
      <h2>360 Event Planner - Gallery</h2>
      <p>
        This event planner 360 gallery provides the 360 view of all the activities/party handled by our teams across country.
        From venue selection to decor, catering, and entertainment, we tailor our services to your unique vision. 
        Contact us to transform your dream wedding into reality. With meticulous attention to detail and a passion
        for creating unforgettable experiences, our team ensures every aspect of your special day is flawlessly executed.
      </p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>

  );
};

export default Gallery;
