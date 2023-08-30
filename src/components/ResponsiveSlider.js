import React, { useState, useEffect } from "react";
import "./ResponsiveSlider.css"; // Import CSS file for styling

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpeg",
  "images/image6.jpg",
  "images/image7.jpg",
];

const ResponsiveSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="custom-slider-container">
      <div className="custom-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`custom-slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="custom-arrow left" onClick={() => goToSlide((currentSlide - 1 + images.length) % images.length)}>
        &lt;
      </div>
      <div className="custom-arrow right" onClick={() => goToSlide((currentSlide + 1) % images.length)}>
        &gt;
      </div>
    </div>
  );
};

export default ResponsiveSlider;
