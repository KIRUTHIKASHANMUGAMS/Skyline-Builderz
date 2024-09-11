

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card, Row, Col } from 'react-bootstrap';
import star from "../../../images/Star.svg";
import testmonial3 from "../../../images/testmonial3.svg";
import testmonial1 from "../../../images/testmonial1.svg";
import testmonial2 from "../../../images/testmonial2.svg";
import qoutes from "../../../images/quotes.svg";
import choose from "../../../images/choose.svg";
import Container from "react-bootstrap/Container";

const testimonials = [
  {
    name: "Cody Fisher",
    role: "Marketing Coordinator",
    content: "Blandit volutpat maeceganas volutpat blandit. Morbi tincidunt ornare massa eget edhbgestas purus viverra. Auctor augue mauris inra augue neque gravida in fermentum et.",
    imgSrc: testmonial1
  },
  {
    name: "Cody Fisher",
    role: "Marketing Coordinator",
    content: "Blandit volutpat maeceganas volutpat blandit. Morbi tincidunt ornare massa eget edhbgestas purus viverra. Auctor augue mauris inra augue neque gravida in fermentum et.",
    imgSrc: testmonial2
  },
  {
    name: "Cody Fisher",
    role: "Marketing Coordinator",
    content: "Blandit volutpat maeceganas volutpat blandit. Morbi tincidunt ornare massa eget edhbgestas purus viverra. Auctor augue mauris inra augue neque gravida in fermentum et.",
    imgSrc: testmonial3
  },
];

const TestimonialsCarousel = () => {
  return (
    <div>
      <Container fluid>

        <div className="testimonial">


          <div className="service-page-details">
            <div className="service-content-details">
              <div className="service-main-details">
                <img src={choose} alt="welcome" />{" "}
                <small className="about-welcome"> Testimonial </small>
              </div>
            </div>
            <div>
              <p className="service-head-details">What Our Customer Say ?</p>
            </div>
            <div className="service-right-details">
              <p>
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt.
              </p>
            </div>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            center
            margin={10}
            autoplay
            autoplayTimeout={5000}
            smartSpeed={450}
            animateOut="fadeOut"
            animateIn="fadeIn"
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              1170: { items: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="item" key={index}>
                <Card className="testimonial-card-details" style={{ marginBottom: "30px" }}>
                  <Row>
                    <Col md="5">
                      <Card.Img variant="left" style={{ width: "100%" }} src={testimonial.imgSrc} />
                    </Col>
                    <Col md="7">
                      <div className="testimonial-main">
                        <Row>
                          <Col md="7" xs="8">
                            <p className="testimonial-head">{testimonial.name}</p>
                            <p className="testimonial-sub">{testimonial.role}</p>
                          </Col>
                          <Col md="5" xs="4">
                            <div>
                              <img src={qoutes} className="quotes" style={{ width: "77%" }} alt="" />
                            </div>
                          </Col>
                        </Row>

                        <div style={{ display: "flex" }}>
                          {[...Array(5)].map((_, i) => (
                            <small key={i}>
                              <img src={star} alt="" width="100%" />
                            </small>
                          ))}
                        </div>
                        <div>
                          <p className="testimonial-content">{testimonial.content}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </Container>
    </div >
  );
};

export default TestimonialsCarousel;
