import React from "react";

function Banner() {
  return (
    <div>
      <div className="background-banner">
        <div className="banner-details">
          <p className="banner-content">About Us</p>
          <div className="banner-text">
            <span>Home </span>
            &bull; <span style={{ color: "#FFCC29" }}> About us</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
