import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import phone from "../../../images/Phone.svg";
import email from "../../../images/Email.svg";
import location from "../../../images/Location.svg";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <Container>
        <Row>
          <Col>
            <div>
              <p className="about-head">Get In Touch</p>
            </div>
            <div className="footer-right ">
              <p>
                is a phrase used to encourage communication, often between
                individuals or businesses, to connect or resolve issues.
              </p>
            </div>
            <div className="about-main">
              <div>
                <div className="about-li-main">
                  {" "}
                  <span>
                    {" "}
                    <img src={phone} alt="" />
                  </span>{" "}
                  <span className="about-li-content">
                    Call us: +(406) 555-0120{" "}
                  </span>
                </div>
              </div>
              <div>
                <div className="about-li-main">
                  {" "}
                  <span>
                    {" "}
                    <img src={email} alt="" />
                  </span>{" "}
                  <span className="about-li-content">
                    Email: support@example.com{" "}
                  </span>
                </div>
              </div>
              <div>
                <div className="about-li-main">
                  {" "}
                  <span>
                    {" "}
                    <img src={location} alt="" />
                  </span>{" "}
                  <span className="about-li-content">
                    2972 Westheimer Rd. Santa Ana, Illinois, USA{" "}
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <p className="form-control-contact">Send a message</p>
            <Form>
              <Row className="mb-5">
                <Col>
                  <Form.Control size="lg" placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control size="lg" placeholder="Last name" />
                </Col>
              </Row>
              <Row className="mb-5">
                <Col>
                  <Form.Control size="lg" placeholder="Address" />
                </Col>
              </Row>
              <Row className="mb-5">
                <Col>
                  <Form.Control
                    size="lg"
                    as="textarea"
                    placeholder="Message"
                    rows={6}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
