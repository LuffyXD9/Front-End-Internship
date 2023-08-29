import React from "react";
// import "./Slideshow.css"; // Make sure to update or create this CSS file
import SimpleImageSlider from "react-simple-image-slider";

const Slideshow = () => {
  const images = [
    { url: "images/image1.jpg" },
    { url: "images/image2.jpg" },
    { url: "images/image3.jpg" },
    { url: "images/image4.jpg" },
    { url: "images/image5.jpeg"},
    { url: "images/image6.jpg" },
    { url: "images/image7.jpg" },
  ];


  return (
    <div className="py-5">
      <SimpleImageSlider
        // width={1000}
        width={1268}
        height={504}
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
