import React from 'react';
import './Categories.css'; // Import CSS file for styling

const Categories = () => {
  return (
    <div className="categories-container">
      {/* First Card */}
      <div className="category-card">
        <img src="./images/Categories/1.jpg" alt="Category 1" />
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
        <img src="./images/Categories/2.jpg" alt="Category 1" />
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
        <img src="./images/Categories/3.jpg" alt="Category 1" />
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
        <img src="./images/Categories/4.jpg" alt="Category 1" />
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
