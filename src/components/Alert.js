import React from 'react'

const Alert = () => {

  return (
        <div className="alert alert-warning alert-dismissible fade show " role="alert">
            <center>Sorry for the inconvenience. We are Restocking our Products and The services will Resume Soon.</center>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  );
}

export default Alert;