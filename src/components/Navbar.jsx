import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assests/gallary/logo1.png"; // Adjust the path as necessary
import './Navbar.css';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`main-navbar ${scrolled ? 'sticky-header' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" width="100%" height="50" className="logo-img me-2" />
          {/*<span className="brand-name">RN Technology</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-toggle" />
        <Navbar.Collapse id="basic-navbar-nav" className="mobile-slide">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            <Nav.Link as={Link} to="/login" className="login-btn">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
