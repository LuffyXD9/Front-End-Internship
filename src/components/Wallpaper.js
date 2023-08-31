import React from 'react';
import './Wallpaper.css'; // Import CSS file for styling
import wall from '../images/Banner/logo.png';
const Wallpaper = ({ imageUrl, playstoreLink }) => {
  const handleWallpaperClick = () => {
    window.location.href = playstoreLink;
  };

  return (
    <div className="wallpaper-container">
      <div className="wallpaper-image" style={{ backgroundImage: `url(${imageUrl})` }} onClick={handleWallpaperClick}>
        <div className="overlay"></div>
        <img src={wall} alt="Play Store" className="playstore-icon" />
      </div>
    </div>
  );
};

export default Wallpaper;
