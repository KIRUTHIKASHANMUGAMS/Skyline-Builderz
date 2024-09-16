import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <Navbar expand="lg" className={`bg-body-tertiary navbar-top ${isScrolled ? 'fixed-top' : ''}`}>      <Container className="navbar-div">
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
      
              <NavDropdown as={Link} to="/service" className={`nav-link-spacing ${location.pathname === '/service' ? 'nav-link-active' : ''}`} title="Service" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/service" >Service</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service-details" >
                  Service Detail
                </NavDropdown.Item>

              </NavDropdown>
       

              <NavDropdown as={Link} to="/blog" className={`nav-link-spacing ${location.pathname === '/blog' ? 'nav-link-active' : ''}`} title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/blog" >Blog</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog-details" >
                  Blog Detail
                </NavDropdown.Item>

              </NavDropdown>


              <NavDropdown as={Link} to="/project" className={`nav-link-spacing ${location.pathname === '/project' ? 'nav-link-active' : ''}`} title="pages">
                <NavDropdown.Item as={Link} to="/project" >Project</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/project-details" >
                Project Detail
                </NavDropdown.Item>

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
