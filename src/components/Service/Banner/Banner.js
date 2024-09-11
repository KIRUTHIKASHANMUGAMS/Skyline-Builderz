import React from "react";
import { Container } from "react-bootstrap";

function Banner() {
  return (
    <div>
      <div className="background-banner">
        <Container>

     
        <div className="banner-details">
          <p className="banner-content">Service</p>
          <div className="banner-text">
            <span>Home </span>
            &bull; <span style={{ color: "#FFCC29" }}>Service</span>{" "}
          </div>
        </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner;
