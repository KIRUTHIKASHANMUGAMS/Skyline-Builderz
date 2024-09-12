import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Filter from "../../../images/filter.svg";
import sortby1 from "../../../images/sortby1.svg";
import sortby2 from "../../../images/sortby2.svg";
import sortby3 from "../../../images/sortby3.svg";
import sortby4 from "../../../images/sortby4.svg";
import Downarrow from "../../../images/downarrow.svg"
import { Card } from 'react-bootstrap';
import Blog1 from '../../../images/blog 1.svg';

import Blog2 from '../../../images/blog2.svg';

import Blog3 from '../../../images/blog3.svg';

import Blog4 from '../../../images/blog4.svg';

import Blog5 from '../../../images/blog5.svg';

import Blog6 from '../../../images/blog6.svg';
import BlogPerson1 from "../../../images/blog-person-1.svg"
import BlogPerson2 from "../../../images/blog-person-2.svg"

import BlogPerson3 from "../../../images/blog-person-3.svg"
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';



function FilterPage() {
    return (
        <div>
            <div className='filter-page'>
                <Container>
                    <div className='filter-main-div'>
                        <Row>
                            <Col lg="8" md="7" xs="4">
                                <div className='filter-main'>

                                    <button className="filter-button grow_spin">
                                        <img src={Filter} alt="welcome" />{" "}
                                        <small className="about-welcome-blog"> Filter </small>
                                    </button>


                                </div>

                            </Col>
                            <Col lg="4" md="5" xs="8">

                                <Row>
                                    <Col lg="4" md="4" xs="6" >
                                        <div>

                                            <small className="about-welcome"> Sort By        <img src={Downarrow} alt="welcome" />{" "} </small>

                                        </div>
                                    </Col >

                                    <Col lg="2" md="2" xs="1">
                                        <img src={sortby1} alt='' className='filter-img-1' />
                                    </Col>


                                    <Col lg="2" md="2" xs="1">
                                        <img src={sortby2} alt='' className='filter-img' />
                                    </Col>


                                    <Col lg="2" md="2" xs="1">
                                        <img src={sortby3} alt='' className='filter-img' />
                                    </Col>
                                    <Col lg="2" md="2" xs="1">
                                        <img src={sortby4} alt='' className='filter-img' />

                                    </Col>
                                </Row>

                            </Col>

                        </Row>
                    </div>
                    <div className='construction-blog'>
                    <Row>
                      

                       
                        <Col lg="4" md="6" xs="12">

                            <Card style={{ marginBottom: "30px" }}>
                                <div className='card-filter'  >
                                    <div style={{ textAlign: "justify" }}>
                                        <Card.Img variant="top" src={Blog1} />
                                    </div>

                                    <div style={{ textAlign: "justify", marginTop: "15px" }}>
                                        <Card.Title><Link to="/blog-details" ><button className="filter-button-card grow_spin">Building</button></Link> </Card.Title>
                                        <div className='card-div-content'>

                                      
                                        <p className="blog-card-main">Home Construction In Malibu Beach, USA</p>
                                        <p className="blog-card-content">
                                            Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.
                                        </p>
                                        </div>
                                        <Row>
                                            <Col lg="7" md="6" xs="6">
                                                <img src={BlogPerson1} alt='' className='filter-img' /> <small className='filter-tum-content'>Tracy Wilson</small>



                                            </Col>
                                            <Col lg="5" md="6" xs="6">
                                                <p className='filter-para-details' >August 20, 2022</p>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Card>
                        </Col>

                        <Col lg="4" md="6" xs="12">
                            <Card style={{ marginBottom: "30px" }}>
                                <div className='card-filter'>
                                    <div style={{ textAlign: "justify" }}>
                                        <Card.Img variant="top" src={Blog2} />
                                    </div>

                                    <div style={{ textAlign: "justify", marginTop: "15px" }}>
                                        <Card.Title> <button className="filter-button-card grow_spin">Construction</button></Card.Title>
                                        <div className='card-div-content'>

                                        <p className="blog-card-main">Systematic project helps to match more impact</p>
                                        <p className="blog-card-content">
                                            Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.
                                        </p>
                                        </div>
                                        <Row>
                                            <Col lg="7" md="6" xs="6">
                                                <img src={BlogPerson2} alt='' className='filter-img' /> <small className='filter-tum-content'>Jenny Wilson</small>



                                            </Col>
                                            <Col lg="5" md="6" xs="6">
                                                <p className='filter-para-details' >August 20, 2022</p>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Card>
                        </Col> <Col lg="4" md="6" xs="12">
                            <Card style={{ marginBottom: "30px" }}>
                                <div className='card-filter'>
                                    <div style={{ textAlign: "justify" }}>
                                        <Card.Img variant="top" src={Blog3} />
                                    </div>

                                    <div style={{ textAlign: "justify", marginTop: "15px" }}>
                                        <Card.Title> <button className="filter-button-card grow_spin">Design</button></Card.Title>
                                        <div className='card-div-content'>

                                        <p className="blog-card-main">Creating Home Service That Make Difference</p>
                                        <p className="blog-card-content">
                                            Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.
                                        </p>
                                        </div>
                                        <Row>
                                            <Col lg="7" md="6" xs="6">
                                                <img src={BlogPerson3} alt='' className='filter-img' /> <small className='filter-tum-content'>Albert Flores</small>



                                            </Col>
                                            <Col lg="5" md="6" xs="6">
                                                <p className='filter-para-details'  >August 20, 2022</p>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Card>
                        </Col> <Col lg="4" md="6" xs="12">
                            <Card style={{ marginBottom: "30px" }}>
                                <div className='card-filter'>
                                    <div style={{ textAlign: "justify" }}>
                                        <Card.Img variant="top" src={Blog4} />
                                    </div>

                                    <div style={{ textAlign: "justify", marginTop: "15px" }}>
                                        <Card.Title> <button className="filter-button-card grow_spin">Design</button></Card.Title>
                                        <div className='card-div-content'>

                                        <p className="blog-card-main">Start A Construction Business In 2024</p>
                                        <p className="blog-card-content">
                                            Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.
                                        </p>
                                        </div>
                                        <Row>
                                            <Col lg="7" md="6" xs="6">
                                                <img src={BlogPerson1} alt='' className='filter-img' /> <small className='filter-tum-content'>Anette Black</small>



                                            </Col>
                                            <Col lg="5" md="6" xs="6">
                                                <p className='filter-para-details'  >August 20, 2022</p>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Card>
                        </Col> <Col lg="4" md="6" xs="12">
                            <Card style={{ marginBottom: "30px" }}>
                                <div className='card-filter'>
                                    <div style={{ textAlign: "justify" }}>
                                        <Card.Img variant="top" src={Blog5} />
                                    </div>

                                    <div style={{ textAlign: "justify", marginTop: "15px" }}>
                                        <Card.Title> <button className="filter-button-card grow_spin">Construction</button></Card.Title>
                                        <div className='card-div-content'>

                                        <p className="blog-card-main">Systematic Project Helps To Match More Impact</p>
                                        <p className="blog-card-content">
                                            Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.
                                        </p>
                                        </div>
                                        <Row>
                                            <Col lg="7" md="6"  xs="6">
                                                <img src={BlogPerson2} alt='' className='filter-img' /> <small className='filter-tum-content'>Floyd Miles</small>



                                            </Col>
                                            <Col lg="5" md="6" xs="6">
                                                <p className='filter-para-details'  >August 20, 2022</p>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Card>
                        </Col> <Col lg="4" md="6" xs="12">
                            <Card style={{ marginBottom: "30px" }}>
                                <div className='card-filter'  >
                                    <div style={{ textAlign: "justify" }}>
                                        <Card.Img variant="top" src={Blog6} />
                                    </div>

                                    <div style={{ textAlign: "justify", marginTop: "15px" }}>
                                        <button className="filter-button-card grow_spin">Design</button>
                                        <div className='card-div-content'>

                                        <p className="blog-card-main">World’s Largest Home Buildings Construction</p>
                                        <p className="blog-card-content">
                                            Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.
                                        </p>
                                        </div>
                                        <Row>
                                            <Col lg="7" md="6" xs="6">
                                                <img src={BlogPerson3} alt='' className='filter-img' /> <small className='filter-tum-content'>Cody Fisher</small>



                                            </Col>
                                            <Col lg="5" md="6" xs="6">
                                                <p className='filter-para-details' >August 20, 2022</p>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Card>
                        </Col>
                        
                    </Row>
                    </div>
                    <Pagination className='d-flex justify-content-center'>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>


                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Container>
            </div>
        </div>
    )
}

export default FilterPage