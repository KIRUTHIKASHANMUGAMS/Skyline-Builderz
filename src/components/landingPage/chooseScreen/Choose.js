import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import tick from "../../../images/tick.svg";

function Choose() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="6" className="project-image ">
            <div className="project-content">
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">3956</span>
                  <span className="stat-label">Project Done</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">851</span>
                  <span className="stat-label">People Working</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">265</span>
                  <span className="stat-label">Business Partner</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">854+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6" className="info-section" style={{ paddingLeft: "70px" }}>
            <div>
              <div className="info-main">
                <img src={choose} alt="welcome" />{" "}
                <small className="about-welcome"> Why Choose Us </small>
              </div>
              <p className="info-head">Few Reasons Why You Should Choose Us</p>
              <p className="footer-right ">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt. Interdum et malesuada.
              </p>
              <div className="project-experience">
                <ul>
                  <li>
                    <img src={tick} alt="" /> 35 Years Experience
                    <p
                      className="footer-right "
                      style={{ paddingLeft: "37px" }}
                    >
                      Pellentesque vehicula eros neque, maximus mattis est
                      sagittis Nulla facilisi. In sed pretium{" "}
                    </p>
                  </li>
                  <li>
                    {" "}
                    <img src={tick} alt="" /> Excellence Certificate
                    <p
                      className="footer-right "
                      style={{ paddingLeft: "37px" }}
                    >
                      Pellentesque vehicula eros neque, maximus mattis est
                      sagittis Nulla facilisi. In sed pretium{" "}
                    </p>
                  </li>
                  <li>
                    {" "}
                    <img src={tick} alt="" /> Affordable Price
                    <p
                      className="footer-right "
                      style={{ paddingLeft: "37px" }}
                    >
                      Pellentesque vehicula eros neque, maximus mattis est
                      sagittis Nulla facilisi. In sed pretium{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Choose;
