import React from "react";
import "../../../css/style.css";
import logo from "../../../images/logo.svg";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div>
      <div className="banner-background">
        <div className="nav-head">
          <nav className="navbar navbar-menu">
            <div className="logo">
              <img className="logo-img" src={logo} alt="logo" />
              <small className="logo-text"> Skyline Builderz</small>
            </div>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#home">Service</Nav.Link>
              <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#home">pages</Nav.Link>
            </Nav>
            <button className="contact-btn">
              {" "}
              <Nav.Link href="/contact">Contact Us </Nav.Link>
            </button>{" "}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
