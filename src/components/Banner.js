import React from 'react';
import './Banner.css'; // Create or update this CSS file for styling

const Banner = () => {
  return (
    <div className="banner">
      <div className="section-container">
      <div className="section section1 yellow-bg">
          <h2 className="black-text">Best Sellers</h2>
          <p>Explore our top products</p>
          <button className="transparent-button">Shop Now</button>
        </div>
        <div className="section section2 image-bg">
        <br /><br /><br /><br /><br /><br />
          <h2 className="white-text">Best Sellers</h2>
          <p>Explore our top products</p>
          <button className="transparent-button">Shop Now</button>
        </div>
        <div className="section section2 image-bg1">
            <br /><br /><br /><br /><br /><br />
          <h2 className="white-text">Best Sellers</h2>
          <p>Explore our top products</p>
          <button className="transparent-button">Shop Now</button>
        </div>
        <div className="section section2 image-bg2">
        <br /><br /><br /><br /><br /><br />
          <h2 className="white-text">Best Sellers</h2>
          <p>Explore our top products</p>
          <button className="transparent-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
