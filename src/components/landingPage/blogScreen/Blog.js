import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import choose from "../../../images/choose.svg";
import Card from "react-bootstrap/Card";
import blog from "../../../images/blog.svg";
import person from "../../../images/person.svg";
import clock from "../../../images/clock.svg";

function Blog() {
  return (
    <div>
      <Container fluid className="blog-section">
        <div className="service-page">
          <div className="service-content">
            <div className="service-main">
              <img src={choose} alt="welcome" />{" "}
              <small className="about-welcome"> Our Blog </small>
            </div>
          </div>
          <div>
            <p className="service-head">Latest News and Articles </p>
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
          <Container>
            <Row>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-blog">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={blog} />
                      <div>
                        <Row>
                          <Col>
                            <div className="blog-det">
                              <img src={person} alt="" />
                              <small>John Kennis</small>
                            </div>
                          </Col>
                          <Col>
                            <div className="blog-clock">
                              <img src={clock} alt="" />{" "}
                              <small>April 2, 2022</small>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <p className="service-head-main-blog">
                      Understanding Your Home’s Electrical Capacity
                    </p>
                    <p className="footer-right-service-blog">
                      Sagittis Nulla facilisi. In sed pretium metus. Proin
                      pretium Turna sit amet tincidunt.
                    </p>
                    <button className="contact-btn">
                      Read More <small></small>{" "}
                    </button>{" "}
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-blog">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={blog} />
                      <div>
                        <Row>
                          <Col>
                            <div className="blog-det">
                              <img src={person} alt="" />
                              <small>John Kennis</small>
                            </div>
                          </Col>
                          <Col>
                            <div className="blog-clock">
                              <img src={clock} alt="" />{" "}
                              <small>April 2, 2022</small>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <p className="service-head-main-blog">
                      Understanding Your Home’s Electrical Capacity
                    </p>
                    <p className="footer-right-service-blog">
                      Sagittis Nulla facilisi. In sed pretium metus. Proin
                      pretium Turna sit amet tincidunt.
                    </p>
                    <button className="contact-btn">
                      Read More <small></small>{" "}
                    </button>{" "}
                  </div>
                </Card>
              </Col>

              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-blog">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={blog} />
                      <div>
                        <Row>
                          <Col>
                            <div className="blog-det">
                              <img src={person} alt="" />
                              <small>John Kennis</small>
                            </div>
                          </Col>
                          <Col>
                            <div className="blog-clock">
                              <img src={clock} alt="" />{" "}
                              <small>April 2, 2022</small>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <p className="service-head-main-blog">
                      {" "}
                      Understanding Your Home’s Electrical Capacity
                    </p>
                    <p className="footer-right-service-blog ">
                      Sagittis Nulla facilisi. In sed pretium metus. Proin
                      pretium Turna sit amet tincidunt.
                    </p>
                    <button className="contact-btn">
                      Read More <small></small>{" "}
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

export default Blog;
