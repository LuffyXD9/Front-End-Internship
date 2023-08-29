import React from 'react';
import './styles/CustomBanner.css'; // Make sure you have the CSS file

const CustomBanner = () => {
  return (
    <div className="custom-banner-container my-5">
        <div className="custom-section custom-section1">
      <div className="custom-content">
        {/* <img src="./images/CustomBanner/1.jpg" alt="Section 1" /> */}
      </div>
      </div>
      <div className="custom-section custom-section2">
        <div className="custom-content">
          <h2 className="custom-bold-text">Section 2</h2>
          <p className="custom-smaller-text">Subtitle for Section 2</p>
          <button className="custom-transparent-button">Shop Now</button>
        </div>
      </div>
      <div className="custom-section custom-section3">
        <div className="custom-content">
          <h2 className="custom-bold-text">Section 3</h2>
          <p className="custom-smaller-text">Subtitle for Section 3</p>
          <button className="custom-transparent-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default CustomBanner;
