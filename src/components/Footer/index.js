import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../images/footer-logo.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import subscribe from "../../images/subscribe.svg";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white  ">
        <Container fluid className="main-footer">
          <div className="footer-content">
            <Row>
              <Col md={3}>
                <img className="footer-img" src={logo} alt="logo" />

                <p className="footer-para">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit consequuntur magni dolores eos qui ratione.
                </p>
                <div className="footer-image-head">
                  <Row>
                    <Col md={3}>
                      <img
                        src={facebook}
                        alt="facebook"
                        className="footer-image"
                      />
                    </Col>
                    <Col md={3}>
                      <img
                        src={instagram}
                        alt="instagram"
                        className="footer-image"
                      />
                    </Col>

                    <Col md={3}>
                      <img
                        src={twitter}
                        alt="twitter"
                        className="footer-image"
                      />
                    </Col>

                    <Col md={3}>
                      <img
                        src={linkedin}
                        alt="linkedin"
                        className="footer-image"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={2}>
                <div className="footer-contact">
                  <h5 className="pb-2">Contact</h5>
                  <p>(629) 555-0129</p>
                  <p>info@example.com</p>
                  <p>6391 Elgin St, Celina, 10299</p>
                </div>
              </Col>

              <Col md={2}>
                <div className="footer-contact ">
                  <h5 className="pb-2">Page</h5>
                  <ul className="list-unstyled ">
                    <li>
                      <p> About Us</p>
                    </li>
                    <li>
                      <p> Contact Us</p>
                    </li>
                    <li>
                      <p> Blogs</p>
                    </li>
                    <li>
                      <p>Service</p>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md={2}>
                <div className="footer-contact ">
                  <h5 className="pb-2">Quick Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p> Terms and Conditions</p>
                    </li>
                    <li>
                      <p> Privacy Policy</p>
                    </li>
                    <li>
                      <p> FAQs</p>
                    </li>
                    <li>
                      <p> Support Center</p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={3}>
                <div className="footer-contact ">
                  <h5 className="pb-2">Subscribe</h5>

                  <form className="d-flex justify-content-center">
                    <img className="footer-img" src={subscribe} alt="logo" />
                  </form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
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
