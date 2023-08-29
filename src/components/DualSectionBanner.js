import React from 'react';
import './DualSectionBanner.css'

const DualSectionBanner = ({ imageUrl, heading, text, buttonText }) => {
  return (
    <div className="dual-section-banner">
      <div className="image-section">
        <img src={imageUrl} alt="Banner Img" />
      </div>
      <div className="content-section">
        <h2>{heading}</h2>
        <p>{text}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default DualSectionBanner;
