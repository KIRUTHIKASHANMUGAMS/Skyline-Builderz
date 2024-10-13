import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import person1 from "../../../images/person1.webp";
import person2 from "../../../images/person2.webp";

import person3 from "../../../images/person3.webp";

import Card from "react-bootstrap/Card";

function Team() {
  return (
    <div>
      <div>
        <Container>
          <div className="team-page">
           
          <div className="service-page-details">
          <div className="service-content-details">
            <div className="service-main-details">
                <img src={choose} alt="welcome" />{" "}
                <small className="about-welcome"> Our Team </small>
              </div>
            </div>
            <div>
            <p className="service-head-details">Meet Our Team</p>
            </div>
            <div className="service-right-details">
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
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person1} className="card-img-top"  alt="person" />
                    </div>

                    <p className="service-head-main-team"> David James </p>
                    <p className="footer-right-service-team"> Engineer </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person2} className="card-img-top"  alt="Description of the image"/>
                    </div>

                    <p className="service-head-main-team">Hinata Hyuga </p>
                    <p className="footer-right-service-team">Engineer</p>
                  </div>
                </Card>
              </Col>

              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person3} className="card-img-top"   alt="Description of the image"/>
                    </div>

                    <p className="service-head-main-team">Sarrah Albert </p>
                    <p className="footer-right-service-team ">Engineer</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Team;
