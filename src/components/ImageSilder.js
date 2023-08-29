import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Make sure to update or create this CSS file

const ImageSlider = ({ images }) => {
  // Duplicate the images array to create a seamless loop
  const duplicatedImages = [...images, ...images];

  const [startIndex, setStartIndex] = useState(0);
  const imagesPerRow = 5; // Display 5 images in a single row

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % duplicatedImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [duplicatedImages.length]);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setStartIndex((prevIndex) => (prevIndex - 1 + duplicatedImages.length) % duplicatedImages.length);
    } else if (direction === 'right') {
      setStartIndex((prevIndex) => (prevIndex + 1) % duplicatedImages.length);
    }
  };

  return (
    <div className="slider">
      <div className="arrow arrow-left" onClick={() => handleArrowClick('left')}>
        &lt;
      </div>
      <div id="slider-container" className="slider-container">
        <div
          className="slider-content"
          style={{
            transform: `translateX(-${startIndex * (100 / imagesPerRow)}%)`,
          }}
        >
{duplicatedImages.map((image, index) => (
  <div key={index} className="slider-item">
    <img src={image} alt="" /> 
    <div className="image-title">Image {index + 1}</div>
  </div>
))}

        </div>
      </div>
      <div className="arrow arrow-right" onClick={() => handleArrowClick('right')}>
        &gt;
      </div>
    </div>
  );
};

export default ImageSlider;
