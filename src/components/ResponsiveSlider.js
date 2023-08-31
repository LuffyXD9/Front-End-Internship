import React, { useState, useEffect } from "react";
import "./ResponsiveSlider.css"; 
// Import CSS file for styling
import sl1 from './../images/image1.jpg';
import sl2 from './../images/image2.jpg';
import sl3 from './../images/image3.jpg';
import sl4 from './../images/image4.jpg';
import sl5 from './../images/image5.jpeg';
import sl6 from './../images/image6.jpg';
import sl7 from './../images/image7.jpg';
const images = [
  sl1,
  sl2,
  sl3,sl4,sl5,sl6,sl7
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
