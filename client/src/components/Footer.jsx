import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white text-center py-3" style={{ backgroundColor: '#1E90FF' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <p className="mb-0">Made with <i className="fa fa-heart text-danger"></i> by Team Nyst</p>
          </div>
          <div className="col-lg-6 mx-auto">
            <p className="mb-0">For assistance, call: <a href="tel:+1234567890" className="text-white">+1 (234) 567-890</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
