import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../../images/footer-logo.svg";
import facebook from "../../../images/facebook.svg";
import instagram from "../../../images/instagram.svg";
import twitter from "../../../images/twitter.svg";
import linkedin from "../../../images/linkedin.svg";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import arrow from "../../../images/arrow-go.svg";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white  ">
        <Container >
          <div  className="main-footer" >
            <Row>
              <Col  lg={3} md={6} sm={12} xs={12} className="pb-3">
              <div style={{textAlign:"left"}}>
              <img className="footer-img-logo" src={logo} alt="logo" />

              </div>

                <p className="footer-para">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit consequuntur magni dolores eos qui ratione.
                </p>
                <div className="footer-image-head">
                  <Row>
                    <Col md={2} xs={2}>
                      <img
                        src={facebook}
                        alt="facebook"
                        className="footer-image"
                      />
                    </Col>
                    <Col md={2} xs={2}>
                      <img
                        src={instagram}
                        alt="instagram"
                        className="footer-image"
                      />
                    </Col>

                    <Col md={2} xs={2}>
                      <img
                        src={twitter}
                        alt="twitter"
                        className="footer-image"
                      />
                    </Col>

                    <Col md={2} xs={2}>
                      <img
                        src={linkedin}
                        alt="linkedin"
                        className="footer-image"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={2} md={6} sm={6} xs={12} className="pb-3">
                <div className="footer-contact">
                  <h5 className="pb-2  ps-3 footer-content-head">Contact</h5>
                  <p className=" ps-3">(629) 555-0129</p>
                  <p className=" ps-3">info@example.com</p>
                  <p className=" ps-3">6391 Elgin St, Celina, 10299</p>
                </div>
              </Col>

              <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                <div className="footer-contact ">
                  <h5 className="pb-2 ps-3 footer-content-head">Page</h5>
                  <ul >
                    <li>
                      <p> <Link to="/about">About Us</Link> </p>
                    </li>
                    <li>
                      <p> <Link to="/contact">Contact Us</Link> </p>
                    </li>
                    <li>
                      <p> <Link to="/blog">Blogs</Link> </p>
                    </li>
                    <li>
                      <p> <Link to="/service">Service</Link></p>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col  lg={3} md={4} sm={6} xs={12} className="pb-3">
                <div className="footer-contact ">
                  <h5 className="pb-2  ps-3 footer-content-head">Quick Links</h5>
                  <ul >
                    <li>
                      <p> Terms and Conditions</p>
                    </li>
                    <li>
                      <p> Privacy Policy</p>
                    </li>
                    <li>
                      <p>  <Link to="/faq">FAQS </Link> </p>
                    </li>
                    <li>
                      <p> Support Center</p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6}  xs={12} className="pb-3">
                <div className="footer-contact ">
                  <h5 className="pb-2 footer-content-head">Subscribe</h5>

                  <Form>
                                <InputGroup>

                                    <Form.Control
                                        type="text"
                                        placeholder="Get product updates"
                                        aria-label="Search"
                                    />
                                    <InputGroup.Text style={{ backgroundColor: "#FFCC29" }}>
                                        <img src={arrow} alt='' />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="footer-content-hr">
                  <hr className="footer-hr" />
                </div>
              </Col>
            </Row>
            <Row>
              <div className="text-center py-3">
                © 2024 Copyright. All rights reserved.
              </div>
            </Row>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
