import React from 'react';

const ToolsBanner = () => {
  return (
    <div className="tools-banner">
      <div className="tools-banner-image">
        {/* Image that redirects to another page when clicked */}
        <a href="/other-page">
          <img src="./images/ToolsBanner/1.jpg" alt="Tools Banner" />
        </a>
      </div>
      <div className="tools-banner-content">
        <div className="tools-banner-text">
          <h2 className="tools-bold-text">20% OFF ON TOOLS</h2>
          <p className="tools-smaller-text">
            Drill, Hammer, Cutter, Screwdrivers, Abrasives, Pliers, etc
          </p>
          <button className="tools-yellow-button">Shop Now</button> 
        </div>
      </div>
    </div>
  );
};

export default ToolsBanner;
