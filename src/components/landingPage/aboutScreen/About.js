import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../../../images/about.svg";
import welcome from "../../../images/welcome-icon.svg";
import number from "../../../images/35.svg";

function About() {
  return (
    <div>
      <div className="about-screen">
        <Container>
          <Row>
            <Col md="5">
              <img src={about} className="about-image" alt="construction" />
            </Col>
            <Col md="7">
              <div className="about-content">
                <div className="about-main">
                  <img src={welcome} alt="welcome" />{" "}
                  <small className="about-welcome"> Welcome To </small>
                </div>
              </div>
              <div>
                <p className="about-head">We Provide Your Future</p>
              </div>
              <div className="footer-right ">
                <p>
                  Pellentesque vehicula eros neque, maximus mattis est sagittis
                  Nulla facilisi. In sed pretium metus. Proin pretium id urna
                  sit amet tincidunt. Interdum et malesuada.
                </p>
                <p>
                  In pulvinar viverra diam, nec rutrum mauris maximus non.
                  Aenean sed quam tristique, facilisis est ac, interdum velit.
                </p>
              </div>
              <div>
                <Row>
                  <Col md="4">
                    <div className="banner-experience p-3">
                      <img src={number} alt="35" />
                      <p className="banner-experience-text">
                        Years Of Experiance
                      </p>
                    </div>
                  </Col>
                  <Col md="8">
                    <div className="banner-left">
                      <p>- Sed varius ipsum lacus</p>
                      <p>- Pulvinar tortor dignissim sit amet.</p>

                      <p>- Quisque tristique diam quis placerat</p>

                      <p>- Aliquam id ante suscipi fringilla.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
