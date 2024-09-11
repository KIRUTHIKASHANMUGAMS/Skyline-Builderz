import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import person1 from "../../../images/person-detail-1.svg";
import person2 from "../../../images/person-details-2.svg";
import person3 from "../../../images/person-detail-3.svg";
import person4 from "../../../images/person-detail-4.svg";
import person5 from "../../../images/person-detail-5.svg";
import person6 from "../../../images/person-detail-6.svg";
import person7 from "../../../images/person-detail-7.svg";
import person8 from "../../../images/person-detail-8.svg";
import person9 from "../../../images/person-detail-9.svg";
import { Link } from "react-router-dom";



import Card from "react-bootstrap/Card";

function Project() {
  return (
    <div>
      <div>
        <Container>
          <div className="team-page">
      
          <div>
            <Row>
              <Col md="4">
              <Link to="/project-details">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person1} />
                    </div>

                    <p className="service-head-main-team"> Lawn Landscape </p>
                    <p className="footer-right-service-team"> House,  Office  </p>
                  </div>
                </Card>
                </Link>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person2} />
                    </div>

                    <p className="service-head-main-team">Living Room </p>
                    <p className="footer-right-service-team">House,  Office </p>
                  </div>
                </Card>
              </Col>

              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person3} />
                    </div>

                    <p className="service-head-main-team">Industry machine issue </p>
                    <p className="footer-right-service-team ">House,  Office </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person4} />
                    </div>

                    <p className="service-head-main-team">Electrical & Maintanace </p>
                    <p className="footer-right-service-team ">House,  Office </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person5} />
                    </div>

                    <p className="service-head-main-team">Industry machine issue </p>
                    <p className="footer-right-service-team ">House,  Office </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person6} />
                    </div>

                    <p className="service-head-main-team">Industry machine issue </p>
                    <p className="footer-right-service-team ">House,  Office </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person9} />
                    </div>

                    <p className="service-head-main-team">Electrical & Maintanace </p>
                    <p className="footer-right-service-team ">House,  Office </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person7} />
                    </div>

                    <p className="service-head-main-team">Industry machine issue</p>
                    <p className="footer-right-service-team ">House,  Office </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person8} />
                    </div>

                    <p className="service-head-main-team">Industry machine issue </p>
                    <p className="footer-right-service-team ">House,  Office </p>
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

export default Project;
