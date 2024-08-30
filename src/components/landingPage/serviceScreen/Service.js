import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import air from "../../../images/Air Conditioner.svg";
import electic from "../../../images/Substation.svg";
import builder from "../../../images/general-building.svg";
import security from "../../../images/Security.svg";
import service from "../../../images/Maintenance.svg";
import home from "../../../images/Home.svg";
import Card from "react-bootstrap/Card";

function Service() {
  return (
    <div>
      <Container>
        <div className="service-page">
          <div className="service-content">
            <div className="service-main">
              <img src={choose} alt="welcome" />{" "}
              <small className="about-welcome"> Our Services </small>
            </div>
          </div>
          <div>
            <p className="service-head">How We Work</p>
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
              <Card style={{ marginBottom: "30px" }}>
                <div className="service-main-card">
                  <div style={{ textAlign: "justify" }}>
                    <img src={air} className="service-image" alt="" />
                  </div>

                  <p className="service-head-main">Air condition service </p>
                  <p className="footer-right-service">
                    Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                    Turna sit amet tincidunt.
                  </p>
                  <p className="service-read-more">Read More</p>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ marginBottom: "30px" }}>
                <div className="service-main-card">
                  <div style={{ textAlign: "justify" }}>
                    <img src={electic} className="service-image" alt="" />
                  </div>

                  <p className="service-head-main">Electrical installation </p>
                  <p className="footer-right-service">
                    Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                    Turna sit amet tincidunt.
                  </p>
                  <p className="service-read-more">Read More</p>
                </div>
              </Card>
            </Col>

            <Col md="4">
              <Card style={{ marginBottom: "30px" }}>
                <div className="service-main-card">
                  <div style={{ textAlign: "justify" }}>
                    <img src={builder} className="service-image" alt="" />
                  </div>

                  <p className="service-head-main">General Builder </p>
                  <p className="footer-right-service ">
                    Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                    Turna sit amet tincidunt.
                  </p>
                  <p className="service-read-more">Read More</p>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card style={{ marginBottom: "30px" }}>
                <div className="service-main-card">
                  <div style={{ textAlign: "justify" }}>
                    <img src={security} className="service-image" alt="" />
                  </div>

                  <p className="service-head-main">Security System </p>
                  <p className="footer-right-service ">
                    Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                    Turna sit amet tincidunt.
                  </p>
                  <p className="service-read-more">Read More</p>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ marginBottom: "30px" }}>
                <div className="service-main-card">
                  <div style={{ textAlign: "justify" }}>
                    <img src={service} className="service-image" alt="" />
                  </div>

                  <p className="service-head-main">Service & maintenance </p>
                  <p className="footer-right-service ">
                    Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                    Turna sit amet tincidunt.
                  </p>
                  <p className="service-read-more">Read More</p>
                </div>
              </Card>
            </Col>

            <Col md="4">
              <Card style={{ marginBottom: "30px" }}>
                <div className="service-main-card">
                  <div style={{ textAlign: "justify" }}>
                    <img src={home} className="service-image" alt="" />
                  </div>

                  <p className="service-head-main">House Extensions </p>
                  <p className="footer-right-service ">
                    Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                    Turna sit amet tincidunt.
                  </p>
                  <p className="service-read-more">Read More</p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Service;
