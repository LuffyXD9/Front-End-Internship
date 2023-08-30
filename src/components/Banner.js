import React from 'react';
import './Banner.css'; // Update this CSS file path for styling

const Banner = () => {
  return (
    <div className="new-banner">
      <div className="new-section-container">
        <div className="new-banner-section new-yellow-bg">
        <h2 className="black-text">Best Sellers</h2>
          <p>Explore our top products</p>
          <button className="transparent-button">Shop Now</button>
          {/* Content for section 1 */}
        </div>
        <div className="new-banner-section new-image-bg">
          <br /><br /><br /><br /><br /><br />
          <h2 className="new-white-text">Best Sellers</h2>
          <p>Explore our top products</p>
          <button className="new-transparent-button">Shop Now</button>
        </div>
        <div className="new-banner-section new-image-bg1">
          <br /><br /><br /><br /><br /><br />
          <h2 className="new-white-text">Best Sellers</h2>
          <p>Explore our top products</p>
          <button className="new-transparent-button">Shop Now</button>
        </div>
        <div className="new-banner-section new-image-bg2">
          <br /><br /><br /><br /><br /><br />
          <h2 className="new-white-text">Best Sellers</h2>
          <p>Explore our top products</p>
          <button className="new-transparent-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
