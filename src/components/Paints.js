import React from 'react';
import './ProductListing.css'; // Make sure you have the CSS file

const Paints = ({ products }) => {
  return (
    <div><h2 className='mx-2'>Asian Paints</h2>
    <div className="product-listing">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <div className="product-discount">{product.discount}%</div>
          <img src={product.image} alt={`Product ${index}`} className="product-image" />
          <div className="product-quick-view">Quick View</div>
          <div className="product-info">
            <p className="company-name silver-text">{product.company}</p>
            <p className="product-name">{product.name}</p>
            <div className="price-info">
              <span className="original-price">{product.originalPrice}</span>
              <span className="current-price">{product.currentPrice}</span>
            </div>
            <button className="select-options-button">Select Options</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Paints;
