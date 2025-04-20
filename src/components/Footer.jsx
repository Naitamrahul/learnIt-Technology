import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">RN Technology</h5>
            <p>Your trusted platform to learn tech and grow your career.</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/courses" className="text-white text-decoration-none">Courses</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Contact</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i>123 Tech Street, Nagpur</p>
            <p><i className="bi bi-telephone-fill me-2"></i>+91 9923756226</p>
            <p><i className="bi bi-envelope-fill me-2"></i>support@rntechnology.com</p>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Subscribe</h5>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your email" />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </form>
          </div>

        </div>

        <hr className="border-secondary" />
        <p className="text-center mb-0">&copy; 2025 IT Course Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
