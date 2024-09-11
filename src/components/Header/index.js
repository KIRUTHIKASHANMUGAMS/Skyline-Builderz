import React from "react";
import logo from "../../images/logo.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, Link } from "react-router-dom"; 


function Header() {
  const location = useLocation();

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="navbar-div">
          <Navbar.Brand as={Link} to="/">
            <div className="logo">
              <img className="logo-img" src={logo} width="100%" alt="logo" />
              <small className="logo-text">Skyline Builderz</small>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex justify-content-between custom-width">
              <Nav className="mx-auto nav-auto">
                <Nav.Link as={Link} to="/" className={`nav-link-spacing ${location.pathname === '/' ? 'nav-link-active' : ''}`}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className={`nav-link-spacing ${location.pathname === '/about' ? 'nav-link-active' : ''}`}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/service" className={`nav-link-spacing ${location.pathname === '/service' ? 'nav-link-active' : ''}`}>
                  Service
                </Nav.Link>
                <Nav.Link as={Link} to="/blog" className={`nav-link-spacing ${location.pathname === '/blog' ? 'nav-link-active' : ''}`}>
                  Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/project" className={`nav-link-spacing ${location.pathname === '/project' ? 'nav-link-active' : ''}`}>
                  Pages
                </Nav.Link>
              </Nav>

              <Nav className="d-flex justify-content-center">
                <Nav.Link as={Link} to="/contact">
                  <button className="grow_spin contact-btn contact-margin">Contact Us</button>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
