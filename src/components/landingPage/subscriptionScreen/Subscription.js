import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import Card from "react-bootstrap/Card";
import Tick from "../../../images/blank-tick.svg";
import { Link } from "react-router-dom";

function Subscription() {
  return (
    <div>
      <Container fluid className="blog-section">
        <div className="service-page-subscription-main">
          <div className="service-content-subscription-detail">
            <div className="service-main">
              <img src={choose} alt="welcome" />
              <small className="about-welcome"> Our Subscriptions </small>
            </div>
          </div>
          <div>
            <p className="service-head-subscription">
              Let’s Customize Work With Affordable Price
            </p>
          </div>
          <div className="service-right-para ">
            <p>
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt.
            </p>
          </div>
        </div>

        <Container>
          <Row>
            {["Basic Plan", "Professional", "Standard"].map((plan, index) => (
              <Col lg="4" md="6" xs="12" key={index}>
                <Card className="subscription-card">
                  <div>
                    <div className="sub-div">
                      <Row>
                        <Col xs={7}>
                          <p className="subscription-head">{plan}</p>
                          <p className="subscription-nu">$ {index === 0 ? "599.00" : index === 1 ? "799.00" : "499.00"}</p>
                        </Col>
                        <Col xs={5}>
                          <p className="subscription-charge">Per Visit Charge</p>
                        </Col>
                      </Row>
                      <div>
                        <hr className="subscription-hr" />
                      </div>

                      <ul className="project-experience">
                        {[
                          "Electrical Service",
                          "Distribution Power Systems",
                          "High & Medium Voltages",
                          "Industrial Control Systems",
                          "Switch Installation",
                          "Generator Installations",
                          "Innovative Construction"
                        ].map((item, itemIndex) => (
                          <li key={itemIndex} className='pb-1 d-flex'>
                            <img style={{ height: "fit-content" }} src={Tick} alt='' />
                            <span className="subscription-li">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/">
                      <button className="contact-btn-subscription grow_spin">
                        Buy Now <small></small>{" "}
                      </button>
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Subscription;
