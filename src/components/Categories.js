import React from 'react';
import './Categories.css'; // Import CSS file for styling
import cm1 from './../images/Categories/1.jpg';
import cm2 from './../images/Categories/2.jpg';
import cm3 from './../images/Categories/3.jpg';
import cm4 from './../images/Categories/4.jpg';

const Categories = () => {
  return (
    <div className="categories-container">
      {/* First Card */}
      <div className="category-card">
        <img src={cm1} alt="Category 1" />
        <h3>Company Name 1</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <button className="shop-button">Shop Now</button>
      </div>
      <div className="category-card">
        <img src={cm2} alt="Category 1" />
        <h3>Company Name 1</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <button className="shop-button">Shop Now</button>
      </div>
      <div className="category-card">
        <img src={cm3} alt="Category 1" />
        <h3>Company Name 1</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <button className="shop-button">Shop Now</button>
      </div>
      <div className="category-card">
        <img src={cm4} alt="Category 1" />
        <h3>Company Name 1</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <button className="shop-button">Shop Now</button>
      </div>

      {/* Repeat for the other 3 cards */}
      {/* ... */}

    </div>
  );
};

export default Categories;
