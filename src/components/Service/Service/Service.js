import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import person1 from "../../../images/person-1.svg";
import person2 from "../../../images/person-2.svg";

import person3 from "../../../images/person-3.svg";

import person4 from "../../../images/person-4.svg";

import person5 from "../../../images/person-5.svg";

import person6 from "../../../images/person-6.svg";
import { Card } from 'react-bootstrap';
import arrow from "../../../images/arrow -button.svg";
import { Link } from 'react-router-dom';



function Service() {
    return (
        <div>
            <div>
                <Container>
                    <div className='service-card-details'>

                  
                    <Row>
                        <Col lg="4" md="4" xs="12">
                            <Card style={{ marginBottom: "30px" }}>

                                <div style={{ textAlign: "justify" }}>
                                    <Card.Img variant="top" className='service-details-main' src={person1} />
                                </div>
                                <div className="service-card">
                                    <p ><button className="service-card-team">Heating Services</button>  </p>
                                    <p className="service-card-sub"> Aenean massa sociis natoque penatibus et magnis dis parturient montes, </p>

                                    <Link to="/service-details" ><button className='contact-btn-service grow_spin'> Read More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col lg="4" md="4" xs="12">
                            <Card style={{ marginBottom: "30px" }}>

                                <div style={{ textAlign: "justify" }}>
                                    <Card.Img variant="top" className='service-details-main' src={person2} />
                                </div>
                                <div className="service-card">
                                    <p ><button className="service-card-team">Roofing Services</button>  </p>
                                    <p className="service-card-sub"> Aenean massa sociis natoque penatibus et magnis dis parturient montes, </p>

                                    <Link to="/service-details" ><button className='contact-btn-service grow_spin'> Read More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>

                        <Col lg="4" md="4" xs="12">
                            <Card style={{ marginBottom: "30px" }}>

                                <div style={{ textAlign: "justify" }}>
                                    <Card.Img variant="top" className='service-details-main' src={person3} />
                                </div>
                                <div className="service-card">
                                    <p ><button className="service-card-team">Flooring Services</button>  </p>
                                    <p className="service-card-sub"> Aenean massa sociis natoque penatibus et magnis dis parturient montes, </p>

                                    <Link to="/service-details" ><button className='contact-btn-service grow_spin'> Read More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col lg="4" md="4" xs="12">
                            <Card style={{ marginBottom: "30px" }}>

                                <div style={{ textAlign: "justify" }}>
                                    <Card.Img variant="top" className='service-details-main' src={person4} />
                                </div>
                                <div className="service-card">
                                    <p ><button className="service-card-team">Painting Services</button>  </p>
                                    <p className="service-card-sub"> Aenean massa sociis natoque penatibus et magnis dis parturient montes, </p>

                                    <Link to="/service-details" ><button className='contact-btn-service grow_spin'> Read More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col lg="4" md="4" xs="12">
                            <Card style={{ marginBottom: "30px" }}>

                                <div style={{ textAlign: "justify" }}>
                                    <Card.Img variant="top" className='service-details-main' src={person5} />
                                </div>
                                <div className="service-card">
                                    <p ><button className="service-card-team">Plumbing Services</button>  </p>
                                    <p className="service-card-sub"> Aenean massa sociis natoque penatibus et magnis dis parturient montes, </p>

                                    <Link to="/service-details" ><button className='contact-btn-service grow_spin'> Read More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col lg="4" md="4" xs="12">
                                <Card style={{ marginBottom: "30px" }}>

                                <div style={{ textAlign: "justify" }}>
                                    <Card.Img variant="top" className='service-details-main' src={person6} />
                                </div>
                                <div className="service-card">
                                    <p ><button className="service-card-team">Electrical Services</button>  </p>
                                    <p className="service-card-sub"> Aenean massa sociis natoque penatibus et magnis dis parturient montes, </p>

                                    <Link to="/service-details" ><button className='contact-btn-service grow_spin'> Read More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col lg="4" md="4" xs="12">
                            <Card style={{ marginBottom: "30px" }}>

                                <div style={{ textAlign: "justify" }}>
                                    <Card.Img variant="top" className='service-details-main' src={person1} />
                                </div>
                                <div className="service-card">
                                    <p ><button className="service-card-team">Heating Services</button>  </p>
                                    <p className="service-card-sub"> Aenean massa sociis natoque penatibus et magnis dis parturient montes, </p>

                                    <Link to="/service-details" ><button className='contact-btn-service grow_spin'> Read More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col lg="4" md="4" xs="12">
                            <Card style={{ marginBottom: "30px" }}>

                                <div style={{ textAlign: "justify" }}>
                                    <Card.Img variant="top" className='service-details-main' src={person2} />
                                </div>
                                <div className="service-card">
                                    <p ><button className="service-card-team">Roofing Services</button>  </p>
                                    <p className="service-card-sub"> Aenean massa sociis natoque penatibus et magnis dis parturient montes, </p>

                                    <Link to="/service-details" ><button className='contact-btn-service grow_spin'> Read More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>

                        <Col lg="4" md="4" xs="12">
                            <Card style={{ marginBottom: "30px" }}>

                                <div style={{ textAlign: "justify" }}>
                                    <Card.Img variant="top" className='service-details-main' src={person3} />
                                </div>
                                <div className="service-card">
                                    <p ><button className="service-card-team ">Flooring Services</button>  </p>
                                    <p className="service-card-sub"> Aenean massa sociis natoque penatibus et magnis dis parturient montes, </p>

                                    <Link to="/service-details" ><button className='contact-btn-service grow_spin'> Read More <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    </div>

                </Container>
            </div>
        </div>
    );
}

export default Service;
