import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import testmonial1 from "../../../images/testmonial1.svg";
import testmonial2 from "../../../images/testmonial2.svg";
import star from "../../../images/Star.svg";
import testmonial3 from "../../../images/testmonial3.svg";
import qoutes from "../../../images/quotes.svg";

import Card from "react-bootstrap/Card";

function Testimonial() {
  return (
    <div>
      <div>
        <Container>
          <div className="service-page">
            <div className="service-content">
              <div className="service-main">
                <img src={choose} alt="welcome" />{" "}
                <small className="about-welcome"> Testimonial </small>
              </div>
            </div>
            <div>
              <p className="service-head">What Our Customer Say ?</p>
            </div>
            <div className="service-right ">
              <p>
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt.
              </p>
            </div>
          </div>
          <div>
            <Row>
              <Col md="4">
                <Card
                  className="testimonial-card-details"
                  style={{ marginBottom: "30px" }}
                >
                  <Row>
                    <Col md="5">
                      <Card.Img
                        variant="left"
                        style={{ width: "100%" }}
                        src={testmonial1}
                      />
                    </Col>
                    <Col md="7">
                      <div className="testimonial-main">
                        <Row>
                          <Col md="7">
                            {" "}
                            <p className="testimonial-head">Cody Fisher</p>
                            <p className="testimonial-sub">
                              Marketing Coordinator
                            </p>
                          </Col>
                          <Col>
                            <div>
                              <img
                                src={qoutes}
                                style={{ width: "77%" }}
                                alt=""
                              />
                            </div>
                          </Col>
                        </Row>

                        <div>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                        </div>
                        <div>
                          <p className="testimonial-content">
                            Blandit volutpat maeceganas volutpat blandit. Morbi
                            tincidunt ornare massa eget edhbgestas purus
                            viverra. Auctor augue mauris inra augue neque
                            gravida in fermentum et.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="testimonial-card-details"
                  style={{ marginBottom: "30px" }}
                >
                  <Row>
                    <Col md="5">
                      <Card.Img
                        variant="left"
                        style={{ width: "100%" }}
                        src={testmonial2}
                      />
                    </Col>
                    <Col md="7">
                      <div className="testimonial-main">
                        <Row>
                          <Col md="7">
                            <p className="testimonial-head">Cody Fisher</p>
                            <p className="testimonial-sub">
                              Marketing Coordinator
                            </p>
                          </Col>
                          <Col>
                            <div>
                              <img
                                src={qoutes}
                                style={{ width: "77%" }}
                                alt=""
                              />
                            </div>
                          </Col>
                        </Row>

                        <div>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                        </div>
                        <div>
                          <p className="testimonial-content">
                            Blandit volutpat maeceganas volutpat blandit. Morbi
                            tincidunt ornare massa eget edhbgestas purus
                            viverra. Auctor augue mauris inra augue neque
                            gravida in fermentum et.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>

              <Col md="4">
                <Card
                  className="testimonial-card-details"
                  style={{ marginBottom: "30px" }}
                >
                  <Row>
                    <Col md="5">
                      <Card.Img
                        variant="left"
                        style={{ width: "100%" }}
                        src={testmonial3}
                      />
                    </Col>
                    <Col md="7">
                      <div className="testimonial-main">
                        <Row>
                          <Col md="7">
                            <p className="testimonial-head">Cody Fisher</p>
                            <p className="testimonial-sub">
                              Marketing Coordinator
                            </p>
                          </Col>
                          <Col>
                            <div>
                              <img
                                src={qoutes}
                                style={{ width: "77%" }}
                                alt=""
                              />
                            </div>
                          </Col>
                        </Row>

                        <div>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                          <small>
                            <img src={star} alt="" />
                          </small>
                        </div>
                        <div>
                          <p className="testimonial-content">
                            Blandit volutpat maeceganas volutpat blandit. Morbi
                            tincidunt ornare massa eget edhbgestas purus
                            viverra. Auctor augue mauris inra augue neque
                            gravida in fermentum et.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Testimonial;
