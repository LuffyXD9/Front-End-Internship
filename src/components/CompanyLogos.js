import React from 'react';
import './CompanyLogos.css'; // Import CSS file for styling

const CompanyLogos = ({ logos }) => {
  return (
    <div className="company-logos-container">
      {logos.map((logo, index) => (
        <div className="logo-container" key={index}>
          <img src={logo} alt={`Company Logo ${index}`} className="logo-img" />
        </div>
      ))}
    </div>
  );
};

export default CompanyLogos;
