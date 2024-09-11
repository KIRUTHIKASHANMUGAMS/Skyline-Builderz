import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import image from "../../../images/faq-image.svg";
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
    return (
        <div>
            <div className='faq-div'>
                <Container>
                    <div>
                        <p className="about-head">Frequently Asked Questions </p>
                        <br />
                    </div>
                    <Row>
                        <Col lg="6">

                            <img src={image} alt='' width="85%" />
                        </Col>
                        <Col lg="6">

                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is Agency ?</Accordion.Header>
                                    <Accordion.Body >
                                        Improve efficiency, provide a better customer experience with
                                        modern technolo services available around Improve efficiency,
                                        provide a better customer experience
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Nulla vitae est risus. Aenean aliquam dolor a massa ?</Accordion.Header>
                                    <Accordion.Body>
                                        Improve efficiency, provide a better customer experience with
                                        modern technolo services available around Improve efficiency,
                                        provide a better customer experience
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Pellentesque habitant morbi tristique senectus ?</Accordion.Header>
                                    <Accordion.Body>
                                        Improve efficiency, provide a better customer experience with
                                        modern technolo services available around Improve efficiency,
                                        provide a better customer experience
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Habitant morbi tristique senectus ?</Accordion.Header>
                                    <Accordion.Body>
                                        Improve efficiency, provide a better customer experience with
                                        modern technolo services available around Improve efficiency,
                                        provide a better customer experience
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>What should be listed on a business card?</Accordion.Header>
                                    <Accordion.Body>
                                        Improve efficiency, provide a better customer experience with
                                        modern technolo services available around Improve efficiency,
                                        provide a better customer experience
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Why we are best company?</Accordion.Header>
                                    <Accordion.Body>
                                        Improve efficiency, provide a better customer experience with
                                        modern technolo services available around Improve efficiency,
                                        provide a better customer experience
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>How the template process works?</Accordion.Header>
                                    <Accordion.Body>
                                        Improve efficiency, provide a better customer experience with
                                        modern technolo services available around Improve efficiency,
                                        provide a better customer experience
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>Company mission & vision?</Accordion.Header>
                                    <Accordion.Body>
                                        Improve efficiency, provide a better customer experience with
                                        modern technolo services available around Improve efficiency,
                                        provide a better customer experience
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Faq