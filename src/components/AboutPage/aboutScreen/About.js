import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import person from "../../../images/person4.svg";
import choose from "../../../images/choose.svg";
import arrow from "../../../images/arrow -button.svg";

function About() {
  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md="7">
            <div className="about-content-main">
              <div className="about-content">
                <div className="about-main">
                  <img src={choose} alt="welcome" />{" "}
                  <small className="about-welcome"> About Us </small>
                </div>
              </div>
              <div>
                <p className="about-head" style={{ paddingTop: "10px" }}>
                  Making your vision come true at the basics.
                </p>
              </div>
              <div className="footer-right ">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio. Sed non mauris vitae erat consequat auctor
                eu in elit. Class aptent taciti sociosquad litora torquent per
                conubia nostra, per inceptos himenaeos. Mauris in erat justo.
                Nullam ac urna eu felis dapibus condimentum sit amet a augue.
              </div>

              <div className="about-number">
                <Row>
                  <Col md="6">
                    <div className="about-li-main">
                      {" "}
                      <span className="about-li"> 1 </span>{" "}
                      <span className="about-li-content">
                        100% Satisfaction
                      </span>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="about-li-main">
                      <span className="about-li"> 2 </span>{" "}
                      <span className="about-li-content">Friendly Support</span>
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="about-li-main">
                      {" "}
                      <span className="about-li"> 3 </span>{" "}
                      <span className="about-li-content">
                        Get Combo Offer Exclusively
                      </span>
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="about-li-main">
                      <span className="about-li"> 4 </span>{" "}
                      <span className="about-li-content">Book Appointment</span>
                    </div>
                  </Col>
                </Row>
                <button className="contact-btn">Discover More</button>{" "}
              </div>
            </div>
          </Col>
          <Col md="5">
            <img
              src={person}
              style={{ width: "100%", height: "650px" }}
              alt=" "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
