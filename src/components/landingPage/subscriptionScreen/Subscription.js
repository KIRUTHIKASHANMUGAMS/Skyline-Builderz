import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import Card from "react-bootstrap/Card";
import Tick from "../../../images/blank-tick.svg";

function Subscription() {
  return (
    <div>
      <Container fluid className="blog-section">
        <div className="service-page-subscription-main">
          <div className="service-content-subscription-detail">
            <div className="service-main">
              <img src={choose} alt="welcome" />{" "}
              <small className="about-welcome"> Our Subscriptions </small>
            </div>
          </div>
          <div>
            <p className="service-head-subscription">
              Let’s Customize Work With Affordable Price{" "}
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

        <div>
          <Container>
            <Row>
              <Col lg="4" md="6" xs="12">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="subscription-card">
                    <div className="sub-div" >
                      <Row>
                        <Col xs={7}>
                          <p className="subscription-head">Basic Plan </p>
                          <p className="subscription-nu">$ 599.00</p>
                        </Col>
                        <Col xs={5}>
                          <p className="subscription-charge">
                            Per Visit Charge
                          </p>
                        </Col>
                      </Row>
                      <div>
                        <hr className="subscription-hr" />
                      </div>

                      <ul className="project-experience">
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Electrical Service
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Distribution Power Systemss
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            High & Medium Voltages
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Industrial Control Systems
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Switch Installation
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Generator Installations
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Innovative Construction
                          </small>
                        </li>
                      </ul>
                    </div>
                    <button className="contact-btn-subscription grow_spin">
                      Buy Now <small></small>{" "}
                    </button>{" "}
                  </div>
                </Card>
              </Col>
              <Col lg="4" md="6" xs="12">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="subscription-card">
                  <div className="sub-div">
                      <Row>
                      <Col xs={7}>
                      <p className="subscription-head">Professional </p>
                          <p className="subscription-nu">$ 799.00</p>
                        </Col>
                        <Col xs={5}>
                         
                            <button className="btn-subscription grow_spin">
                              popular <small></small>{" "}
                            </button>{" "}
                       
                          <p className="sub-visit">Per Visit Charge</p>
                        </Col>
                      </Row>
                      <div>
                        <hr className="subscription-hr" />
                      </div>

                      <ul className="project-experience">
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            PLC Controls{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Conveyor systems{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Wiring renovations{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Electric Water Heater Repair{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Service And Panel Upgrades{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Efficient Lighting Solutions{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Site lighting{" "}
                          </small>
                        </li>
                      </ul>
                    </div>
                    <button className="contact-btn-subscription grow_spin">
                      Buy Now <small></small>{" "}
                    </button>{" "}
                  </div>
                </Card>
              </Col>
              <Col lg="4" md="6" xs="12">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="subscription-card">
                  <div className="sub-div" >
                      <Row>
                      <Col xs={7}>
                      <p className="subscription-head">Standard</p>
                          <p className="subscription-nu">$ 499.00</p>
                        </Col>
                        <Col xs={5}>
                          <p className="subscription-charge">
                            Per Visit Charge
                          </p>
                        </Col>
                      </Row>
                      <div>
                        <hr className="subscription-hr" />
                      </div>

                      <ul className="project-experience">
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Cable Tray Installations{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Wiring Upgrades{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Energy Efficient Lighting{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Emergency Generating{" "}
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Pools And Hot Tubs
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Air Conditioning Units
                          </small>
                        </li>
                        <li>
                          <img src={Tick} alt="" />
                          <small className="subscription-li">
                            Generating Systems{" "}
                          </small>
                        </li>
                      </ul>
                    </div>
                    <button className="contact-btn-subscription grow_spin">
                      Buy Now <small></small>{" "}
                    </button>{" "}
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Subscription;
