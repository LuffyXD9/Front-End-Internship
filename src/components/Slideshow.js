import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./Slideshow.css"; // Import or create CSS file for styling

const Slideshow = () => {
  const images = [
    { url: "images/image1.jpg" },
    { url: "images/image2.jpg" },
    { url: "images/image3.jpg" },
    { url: "images/image4.jpg" },
    { url: "images/image5.jpeg" },
    { url: "images/image6.jpg" },
    { url: "images/image7.jpg" },
  ];

  return (
    <div className="slideshow-container">
      <SimpleImageSlider
        width={1000} // Adjust the width as needed
        height={504} // Adjust the height as needed
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay={true}
      />
    </div>
  );
};

export default Slideshow;
