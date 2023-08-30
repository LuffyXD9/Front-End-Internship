import React, { useState } from 'react';
import './HomeNav.css'; // Make sure to create the corresponding CSS file

const HomeNav = () => {
  const [selectedItem, setSelectedItem] = useState('Home');
  const [showMediaControl, setShowMediaControl] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const toggleMediaControl = () => {
    setShowMediaControl(!showMediaControl);
  };

  const navItems = ['Home', 'Shop', 'Paints', 'Electricals','SANITARY WARE','CEMENTS & POP','ADHESIVE','CLEANING','TOOLS','TRACKING'];

  return (
    <div className="navbar">
      <div className={`media-control ${showMediaControl ? 'active' : ''}`} onClick={toggleMediaControl}>
        ☰
      </div>
      <div className={`nav-items ${showMediaControl ? 'hidden' : ''}`}>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${selectedItem === item ? 'selected' : ''}`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeNav;
