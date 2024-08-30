// src/components/Main.js
import React from "react";
import banner from "../../../images/banner-text.svg";
import arrow from "../../../images/arrow.svg";

const Banner = () => {
  return (
    <main>
      <div className="banner">
        <img src={banner} alt="text" />
        <p className="banner-head">Build your Dream home</p>
        <p className="banner-sub">
          Cras ac sapien eget ante faucibus tempus et eu tortor. Integer iaculis
          ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet
          tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet.
          Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo
          vel, imperdiet ut mauris. Ut ultricies arcu risus,
        </p>
        <button className="contact-btn">
          Get Started{" "}
          <small>
            <img src={arrow} alt="arrow" />
          </small>{" "}
        </button>
      </div>
    </main>
  );
};

export default Banner;
