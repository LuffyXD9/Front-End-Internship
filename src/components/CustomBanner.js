import React from 'react';
import './styles/CustomBanner.css'; // Make sure you have the CSS file

const CustomBanner = () => {
  return (
    <div className="custom-banner-container my-5">
      <div className="custom-section custom-section-first">
        <div className="custom-content">
          {/* Content for the first section */}
        </div>
      </div>
      <div className="custom-section custom-section-second">
        <div className="custom-content">
          <h2 className="custom-bold-text">Section 2</h2>
          <p className="custom-smaller-text">Subtitle for Section 2</p>
          <button className="custom-transparent-button">Shop Now</button>
        </div>
      </div>
      <div className="custom-section custom-section-third">
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
