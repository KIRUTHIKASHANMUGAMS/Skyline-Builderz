import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import star from "../../../images/Star.svg";
import qoutes from "../../../images/quotes.svg";
import ellipsis1 from "../../../images/Ellipse1.svg";
import ellipsis2 from "../../../images/Ellipse2.svg";
import ellipsis3 from "../../../images/Ellipse3.svg";
import ellipsis4 from "../../../images/Ellipse 4.svg";
import ellipsis5 from "../../../images/Ellipse5.svg";

function Testimonial() {
  return (
    <div>
      <div className="testimonial-about">
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
              <Col md="3">
                <Row>
                  <Col md="12">
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
                            <img src={qoutes} style={{ width: "47%" }} alt="" />
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
                          tincidunt ornare massa eget edhbgestas purus viverra.
                          Auctor augue mauris inra augue neque gravida in
                          fermentum et.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="8">
                <div>
                  <Row>
                    <Col md="6">
                      <div style={{ position: "relative" }}>
                        <img src={ellipsis1} alt="Ellipse" />
                        <img
                          src={ellipsis4}
                          className="testimonial-ellipsis-front"
                          alt="Ellipse"
                        />
                      </div>
                    </Col>
                    <Col
                      md="6"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        <img src={ellipsis2} alt="Ellipse" />
                        <img
                          src={ellipsis5}
                          className="testimonial-ellipsis"
                          alt="Ellipse"
                        />
                      </div>

                      <div>
                        <hr className="testimonial-hr" />
                      </div>
                      <div style={{ position: "relative" }}>
                        <img src={ellipsis3} alt="Ellipse" />
                        <img
                          src={ellipsis5}
                          className="testimonial-ellipsis"
                          alt="Ellipse"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Testimonial;
