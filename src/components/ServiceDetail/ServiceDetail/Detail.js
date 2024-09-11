import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import person from "../../../images/person-1.svg";
import clock from "../../../images/clock-service.svg";
import price from "../../../images/price-service.svg";
import technology from "../../../images/techno-service.svg";
import estimate from "../../../images/estimate-sevice.svg";
import tick from "../../../images/tick.svg";
import construction from "../../../images/construction-details.svg";







function Details() {
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
                                            <Col lg="2" xs="2"><img src={clock} style={{width:"100%"}} alt='' />
                                            </Col>
                                            <Col className='ps-3'>

                                                <p className="construction-head-content">24/7 Availability</p>
                                                <p className="tele-service">Globally incubate standards before scalable benefits.</p>

                                            </Col>
                                        </Row>


                                    </Col>

                                    <Col lg="6" md="6" xs="12">

                                        <Row>
                                            <Col lg="2" xs="2"><img src={price} style={{width:"100%"}}  alt='' />
                                            </Col>
                                            <Col className='ps-3'>

                                                <p className="construction-head-content">Affordable Price</p>
                                                <p className="tele-service">Globally incubate standards before scalable benefits.</p>

                                            </Col>
                                        </Row>


                                    </Col>
                                    <Col lg="6" md="6" xs="12">

                                        <Row>
                                            <Col lg="2" xs="2"><img src={technology} style={{width:"100%"}}  alt='' />
                                            </Col>
                                            <Col className='ps-3'>

                                                <p className="construction-head-content">Process Technology</p>
                                                <p className="tele-service">Globally incubate standards before scalable benefits.</p>

                                            </Col>
                                        </Row>


                                    </Col>
                                    <Col lg="6" md="6" xs="12">

                                        <Row>
                                            <Col lg="2" xs="2"><img src={estimate} style={{width:"100%"}}  alt='' />
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
                                            <p className='pb-1'><img src={tick} alt='' /><span className='construct-key' style={{ marginLeft: "14px" }}>Experience investor Technician.</span> </p>
                                            <p className='pb-1' ><img src={tick} alt='' /><span className='construct-key' style={{ marginLeft: "14px" }}>Your Electrical and Security System.</span>  </p>
                                            <p className='pb-1'><img src={tick} alt='' /> <span className='construct-key' style={{ marginLeft: "14px" }}>Sources whereas high standards</span> </p>
                                            <p className='pb-1'><img src={tick} alt='' /> <span className='construct-key' style={{ marginLeft: "14px" }}>Credibly innovate granular internal</span></p>
                                            <p className='pb-1'><img src={tick} alt='' /><span className='construct-key' style={{ marginLeft: "14px" }}>Services for domestic and commercial.</span> </p>
                                        </div>

                                    </Col>
                                    <Col lg="6" md="6" xs="12">
                                        <img src={construction} style={{width:"100%"}}  alt='' />
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
                                <button className='discount-button'>
                                    Discount 25% <br/>
                                  Rewiring Services
                                </button>
                                <p  className='discount-content pt-2'>Click to Get Discout</p>

                            </div>




                            <div className='pt-5' style={{ textAlign: "justify" }}>
                                <p className="blog-card-main">Our Services</p>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' /></Col>
                                        <Col className='ps-3'>
                                            <span className="tele-service" >Telecom Installation and Repair</span>
                                        </Col>

                                    </Row>


                                </div>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' />
                                        </Col>
                                        <Col className='ps-3'>  <span className="tele-service">Hosted PBX Solutions</span>

                                        </Col>
                                    </Row>


                                </div>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' />
                                        </Col>
                                        <Col className='ps-3'>  <span className="tele-service">Outdoor/Parking Lot Lighting</span>

                                        </Col>
                                    </Row>


                                </div>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' />
                                        </Col>
                                        <Col className='ps-3'>  <span className="tele-service">Outlets, Circuits and Rewiring</span>

                                        </Col>
                                    </Row>


                                </div>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' />
                                        </Col>
                                        <Col className='ps-3'>  <span className="tele-service">HID Lighting and Control</span>

                                        </Col>
                                    </Row>


                                </div>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' />
                                        </Col>
                                        <Col className='ps-3'>  <span className="tele-service">Lighting Design</span>

                                        </Col>
                                    </Row>


                                </div>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' />
                                        </Col>
                                        <Col className='ps-3'>  <span className="tele-service">Motors and Transformers</span>

                                        </Col>
                                    </Row>


                                </div>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' />
                                        </Col>
                                        <Col className='ps-3'>  <span className="tele-service">Isolated Computer Circuits</span>

                                        </Col>
                                    </Row>


                                </div>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' />
                                        </Col>
                                        <Col className='ps-3'>  <span className="tele-service">Data/Communications Cabling</span>

                                        </Col>
                                    </Row>


                                </div>
                                <div className="blog-card-content-service">
                                    <Row>
                                        <Col lg="2" xs="2"><img src={tick} alt='' />
                                        </Col>
                                        <Col className='ps-3'>  <span className="tele-service">Ballast/Lamp Replacing</span>

                                        </Col>
                                    </Row>


                                </div>





                            </div>
                        </div>




                    </Col>

                </Row>
                </div>
            </Container>
        </div >
    )
}

export default Details