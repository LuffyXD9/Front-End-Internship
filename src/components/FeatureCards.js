import React from 'react';
import './FeatureCards.css'; // Import CSS file for styling

const FeatureCards = () => {
  return (
    <div className="feature-cards-container">
      <div className="feature-card">
        <div className="icon-container">
          <img src="./images/Features/1.png" alt="Secure Payment" />
        </div>
        <h3 className="feature-heading">SECURE PAYMENT</h3>
        <p className="feature-description">
          Your payments are securely processed with advanced encryption.
        </p>
      </div>
      <div className="feature-card">
        <div className="icon-container">
          <img src="./images/Features/1.png" alt="Customer Support" />
        </div>
        <h3 className="feature-heading">24/7 CUSTOMER SUPPORT</h3>
        <p className="feature-description">
          Our dedicated support team is available around the clock to assist you.
        </p>
      </div>
      <div className="feature-card">
        <div className="icon-container">
          <img src="./images/Features/1.png" alt="Fast Delivery" />
        </div>
        <h3 className="feature-heading">FAST DELIVERY</h3>
        <p className="feature-description">
          Experience quick and reliable delivery to your doorstep.
        </p>
      </div>
    </div>
  );
};

export default FeatureCards;
