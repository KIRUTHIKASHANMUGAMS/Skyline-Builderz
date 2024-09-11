import React from 'react';
import blog from "../../../images/ellipse-blog.svg";
import blog2 from "../../../images/ellipse-blog-2.svg"
import blog3 from "../../../images/ellipse-blog-3.svg"
import blog4 from "../../../images/ellipse-blog-4.svg"
import like from "../../../images/like.svg";
import chat from "../../../images/chat.svg"
import { Col, Container, Row } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import arrow from "../../../images/arrow -button.svg"


function Comments() {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="9">
                        <p className="construction-main-head construction-details-head">Comments</p>
                        <Row className='comment-contents' >


                            <Col lg="1" md="2"  xs="3">
                                <div className='d-flex justify-content-end'>   <img src={blog} alt='' className='command-image'/></div>

                            </Col>
                            <Col lg="10" md="10" xs="9">
                                <div style={{ textAlign: "start" }}>
                                    <p className="construction-main-head">Darlene Robertson</p>
                                    <p className="blog-card-content">1 Month ago</p>
                                    <p className="blog-card-content">Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>

                                    <Row>
                                        <Col lg="2" xs="6"><img src={like} alt='' /> <span>158</span></Col>
                                        <Col lg="2" xs="6"><img src={chat} alt="" /> <span>Reply</span></Col>

                                    </Row>
                                </div>


                            </Col>
                        </Row>
                        <Row className='comment-contents' >
                            <Col lg="1" md="2"  xs="3">
                                <div className='d-flex justify-content-end'>   <img src={blog2} alt='' className='command-image' /></div>
                            </Col>
                            <Col lg="10" md="10" xs="9">
                                <div style={{ textAlign: "start" }}>
                                    <p className="construction-main-head">Wade Warren</p>
                                    <p className="blog-card-content">1 Month ago</p>
                                    <p className="blog-card-content">Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>

                                    <Row>
                                        <Col lg="2" xs="6"><img src={like} alt='' /> <span>158</span></Col>
                                        <Col lg="2" xs="6"><img src={chat} alt="" /> <span>Reply</span></Col>

                                    </Row>
                                </div>


                            </Col>
                        </Row>
                        <div className='comment-margin'>
                        <Row className='comment-contents '  >
                        

                           
                            <Col lg="1" md="2"  xs="3">
                                <div className='d-flex justify-content-end'>   <img src={blog3} alt='' className='command-image' /></div>
                            </Col>
                            <Col lg="10" md="10" xs="9">
                                <div style={{ textAlign: "start" }}>
                                    <p className="construction-main-head">Annette Black</p>
                                    <p className="blog-card-content">1 Month ago</p>
                                    <p className="blog-card-content">Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>

                                    <Row>
                                        <Col lg="2" xs="6"><img src={like} alt='' /> <span>158</span></Col>
                                        <Col lg="2" xs="6"><img src={chat} alt="" /> <span>Reply</span></Col>

                                    </Row>
                                </div>


                            </Col>
                        
                        </Row>
                        </div>

                        <Row className='comment-contents' >
                            <Col lg="1" md="3" xs="3"> 
                                <div className='d-flex justify-content-end'>   <img src={blog4} alt='' className='command-image' /></div>
                            </Col>
                            <Col lg="10" md="9" xs="9">
                                <div style={{ textAlign: "start" }}>
                                    <p className="construction-main-head">Ralph Edwards</p>
                                    <p className="blog-card-content">1 Month ago</p>
                                    <p className="blog-card-content">Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>

                                    <Row>
                                        <Col lg="2" xs="6"><img src={like} alt='' /> <span>158</span></Col>
                                        <Col lg="2" xs="6"><img src={chat} alt="" /> <span>Reply</span></Col>

                                    </Row>
                                </div>


                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Row>
                    <Col lg="9">
                        <p className="construction-main-head construction-details-head">Leave a comment</p>

                        <Form>
                            <Row className="mb-5">
                                <Col>
                                    <Form.Control size="lg" placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Control size="lg" placeholder="Last name" />
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col>
                                    <Form.Control size="lg" placeholder="Email" />
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col>
                                    <Form.Control
                                        size="lg"
                                        as="textarea"
                                        placeholder="Message"
                                        rows={6}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-5 d-flex justify-content-start">
                                    <button className='contact-btn-blog grow_spin'> Submit <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                </Col>
                            </Row>


                        </Form>
                    </Col>
                </Row>


            </Container>


        </div>
    )
}

export default Comments