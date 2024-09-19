import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import MobileHeader from "./MobileHeader";
function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return <MobileHeader />;
  }

  return (
    <div>
      <Navbar expand="lg" className={`bg-body-tertiary navbar-top ${isScrolled ? 'fixed-top' : ''}`}>
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
                <NavDropdown title="Services" id="basic-nav-dropdown" className={`nav-link-spacing ${location.pathname.startsWith('/service') ? 'nav-link-active' : ''}`}>
                  <NavDropdown.Item as={Link} to="/service">Services</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/service-details">Service Detail</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Blogs" id="basic-nav-dropdown" className={`nav-link-spacing ${location.pathname.startsWith('/blog') ? 'nav-link-active' : ''}`}>
                  <NavDropdown.Item as={Link} to="/blog">Blogs</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/blog-details">Blog Detail</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="basic-nav-dropdown" className={`nav-link-spacing ${location.pathname.startsWith('/project') ? 'nav-link-active' : ''}`}>
                  <NavDropdown.Item as={Link} to="/project">Projects</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/project-details">Project Detail</NavDropdown.Item>
                </NavDropdown>
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
