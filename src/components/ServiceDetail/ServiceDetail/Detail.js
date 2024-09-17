import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import person from "../../../images/person-1.svg";
import clock from "../../../images/clock-service.svg";
import price from "../../../images/price-service.svg";
import technology from "../../../images/techno-service.svg";
import estimate from "../../../images/estimate-sevice.svg";
import tick from "../../../images/tick.svg";
import construction from "../../../images/construction-details.svg";
import { Link } from 'react-router-dom';







function Details() {


    const services = [
        "Telecom Installation and Repair",
        "Hosted PBX Solutions",
        "Outdoor/Parking Lot Lighting",
        "Outlets, Circuits and Rewiring",
        "HID Lighting and Control",
        "Lighting Design",
        "Motors and Transformers",
        "Isolated Computer Circuits",
        "Data/Communications Cabling",
        "Ballast/Lamp Replacing"
    ];
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <div>
            <Container>
                <div className='heating-service'>


                    <Row>


                        <Col lg="8">
                            <div className='blog-details-content'>
                                <img src={person} alt="" style={{ width: "100%" }} />
                                <div className='construction-detail'>

                                    <p className="construction-main-head"> Description for Commercial Services</p>
                                    <p className="banner-sub-about">
                                        Phosfluorescently engage worldwide methodologies with web enabled technology Interactively coordinate proactives e-commerce process centric outside the box thinking completely pursue scalabl customer service through sustainable potentialities colaboratively administrate turnkey channels whereas virtual e tailers objectively seize scalable metrics whereas proactiveservices Seamlessly empower fully researched growth strategies.            </p>
                                    <br />
                                    <p className="banner-sub-about"> Coordinate proactives e-commerce process centric outside the box thinking completely pursue scalabl customer service through sustainable potentialities colaboratively administrate turnkey channels whereas virtual e tailers objectively seize scalable.</p>

                                </div>


                                <div className="service-card-content">
                                    <Row>
                                        <Col lg="6" md="6" xs="12">
                                            <Row>
                                                <Col lg="2" xs="2"><img src={clock} style={{ width: "100%" }} alt='' />
                                                </Col>
                                                <Col className='ps-3'>

                                                    <p className="construction-head-content">24/7 Availability</p>
                                                    <p className="tele-service">Globally incubate standards before scalable benefits.</p>

                                                </Col>
                                            </Row>


                                        </Col>

                                        <Col lg="6" md="6" xs="12">

                                            <Row>
                                                <Col lg="2" xs="2"><img src={price} style={{ width: "100%" }} alt='' />
                                                </Col>
                                                <Col className='ps-3'>

                                                    <p className="construction-head-content">Affordable Price</p>
                                                    <p className="tele-service">Globally incubate standards before scalable benefits.</p>

                                                </Col>
                                            </Row>


                                        </Col>
                                        <Col lg="6" md="6" xs="12">

                                            <Row>
                                                <Col lg="2" xs="2"><img src={technology} style={{ width: "100%" }} alt='' />
                                                </Col>
                                                <Col className='ps-3'>

                                                    <p className="construction-head-content">Process Technology</p>
                                                    <p className="tele-service">Globally incubate standards before scalable benefits.</p>

                                                </Col>
                                            </Row>


                                        </Col>
                                        <Col lg="6" md="6" xs="12">

                                            <Row>
                                                <Col lg="2" xs="2"><img src={estimate} style={{ width: "100%" }} alt='' />
                                                </Col>
                                                <Col className='ps-3'>

                                                    <p className="construction-head-content">Free Estimation</p>
                                                    <p className="tele-service">Globally incubate standards before scalable benefits.</p>

                                                </Col>
                                            </Row>


                                        </Col>
                                    </Row>


                                </div>

                                <div>
                                    <p className="construction-main-head">Key benefits With Our Service</p>
                                    <p className="banner-sub-about">Scalabl customer service through sustainable potentialities colaboratively administrate turnkey channels whereas virtual e tailers objectively seize scalable metrics whereas proactiveservices Seamlessly empower fully researched growth strategies.</p>
                                    <Row>
                                        <Col lg="6" md="6" xs="12">
                                            <div className='construction-key'>

                                                <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={tick} alt='' /><span className='construct-key' style={{ marginLeft: "14px" }}>Experience investor Technician.</span> </p>
                                                <p className='pb-1 d-flex' ><img style={{ height: "fit-content" }} src={tick} alt='' /><span className='construct-key' style={{ marginLeft: "14px" }}>Your Electrical and Security System.</span>  </p>
                                                <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={tick} alt='' /> <span className='construct-key' style={{ marginLeft: "14px" }}>Sources whereas high standards</span> </p>
                                                <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={tick} alt='' /> <span className='construct-key' style={{ marginLeft: "14px" }}>Credibly innovate granular internal</span></p>
                                                <p className='pb-1 d-flex'><img style={{ height: "fit-content" }} src={tick} alt='' /><span className='construct-key' style={{ marginLeft: "14px" }}>Services for domestic and commercial.</span> </p>
                                            </div>

                                        </Col>
                                        <Col lg="6" md="6" xs="12">
                                            <img src={construction} style={{ width: "100%" }} alt='' />
                                        </Col>
                                    </Row>

                                </div>
                            </div>

                            <div>
                            </div>

                        </Col>
                        <Col lg="4">



                            <div className='blog-main-details'>
                                <div className="construction-image-background">
                                    <p className='discount-content'>Providing Varity
                                        Electical Services</p>
                                    < Link to="#">   <button className='discount-button grow_spin'>
                                        Discount 25% <br />
                                        Rewiring Services
                                    </button></Link>
                                    < Link to="#"><p className='discount-content pt-2'>Click to Get Discount</p></Link>

                                </div>
                            </div>




                            <div className='pt-5' style={{ textAlign: "justify" }}>
                                <p className="blog-card-main">Our Services</p>
                                {services.map((service, index) => (
                                    <div className="blog-card-content-service" key={index}>
                                        <Row>
                                            <Col className='ps-3 d-flex' onClick={() => setActiveService(service)}>



                                                <img style={{ height: "fit-content" }} src={tick} alt='' />
                                                <span
                                                    className="tele-service"
                                                    style={{
                                                        marginLeft: "14px",
                                                        color: activeService === service ? '#C10023' : 'black'
                                                    }}
                                                >
                                                    <Link to="#">                                                    {service}

                                                    </Link>
                                                </span>
                                                <div>
                                                </div>

                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                                <hr className='project-hr-service' />


                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>


                        </Col>

                    </Row>
                </div>
            </Container>
        </div >
    )
}

export default Details