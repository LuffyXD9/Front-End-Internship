import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>MY ACCOUNT</h3>
        <ul>
          <li>Cart</li>
          <li>Checkout</li>
          <li>My Account</li>
          <li>Payment Options</li>
          <li>Forget Password</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>INFORMATION</h3>
        <ul>
          <li>Track Your Order</li>
          <li>How It Works</li>
          <li>Gallery</li>
          <li>COVID-19 FAQ</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>WHY CHOOSE US</h3>
        <ul>
          <li>Support</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Reseller Program</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>POLICIES</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>DOWNLOAD OUR APP</h3><div className="social-icons">
        <a href="https://www.facebook.com"><img src="./images/features/logo.png" alt="Facebook" /></a></div>
      </div>
      <div className="footer-section">
        <h3>CONNECT WITH US</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com"><img src="./images/features/facebook.png" alt="Facebook" /></a>
          <a href="https://www.instagram.com"><img src="./images/features/insta.png" alt="Instagram" /></a>
          <a href="https://www.twitter.com"><img src="./images/features/twitter.png" alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
