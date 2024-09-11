import React from 'react'
import Construction from "../../../images/construction.svg"
import { Container, Col, Row } from 'react-bootstrap'
import quotation1 from "../../../images/quotation1.svg"
import quotation2 from "../../../images/quotation2.svg"
import search from "../../../images/Search.svg";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import send from "../../../images/Send.svg"
import send1 from "../../../images/Send1.svg"




function Details() {
    return (
        <div>
            <Container>
                <div className='blog-category'>

               
                <Row>

                    <Col lg="9">
                        <div className='blog-details-content'>
                            <img src={Construction} alt="" style={{ width: "100%" }} />
                            <div className='construction-detail'>


                                <button className="filter-button-card grow_spin pt-2">Building</button>
                            
                               <div className='blog-details-div'>
                                <p >Home Construction In Malibu Beach, USA</p>
                                </div>
                                <p className="blog-card-content">
                                    Neque convalliscras semper auctor neque vitae. Suspendisse faucibus interdum posuere lorem ipsum dolor. Leo inter
                                    Ut placerat orci nulla Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pellentesque dignissim.Ac ut consequat semper viverra nam libero justo. Id leo in vitae turpis massa sed elementum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Urna neque viverra justo nec ultrices dui sapien. Non quam lacus suspendisse faucibus interdum posuere. Magna fringilla urna porttitor rhoncus dolor purus non. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Metus aliquam eleifend mi in nulla posuere.                        </p>
                                <br />
                                <p> <img src={quotation1} alt='' /> <span className='detail-quotes'>The job market of the future will consist of those jobs that robots cannot perform. Our pattern Gardeners will still have jobs because every garden is different. </span> <img src={quotation2} alt='' /></p>
                                <br />
                                <p className="blog-card-content">
                                    Ac ut consequat semper viverra nam libero justo. Id leo in vitae turpis massa sed atfrdt elementum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Urna neque viverra justo nec ultrices dui sapien. Non quam lacus suspendisse
                                </p>
                                <br />
                                <p className="blog-card-content">Purus faucibus ornare suspendisse sed nisi lacus. Nullam non nisi est sit amet. Risus quis varius quam quisque id diam vel. Diam volutpat commodo sed egestas egestas fringilla. Eleifend donec pretium vulputate sapien nec sagittis. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Habitasse platea dictumst quisque sagittis purus sit amet. Dolor magna eget est lorem ipsum dolor. Sit amet nisl suscipit adipiscing bibendum est ultricies. Sed lectus vestibulum mattis ullamcorper velit sed
                                </p>
                            </div>
                        </div>

                        <div>
                        </div>

                    </Col>
                    <Col lg="3">
                        <div className='blog-main-details'>
                            <Form>
                                <InputGroup>

                                    <Form.Control
                                        type="text"
                                        placeholder="Search..."
                                        aria-label="Search"
                                    />
                                    <InputGroup.Text style={{ backgroundColor: "#FFCC29" }}>
                                        <img src={search} alt='' />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form>

                            <div className='pt-5' style={{ textAlign: "justify" }}>
                                <p className="blog-card-main">Post Categories</p>
                                <div className="blog-card-content">
                                    <img src={send1} alt='' /> <span style={{ color: "#C10023" }}>Big buildings</span>

                                </div>
                                <div className="blog-card-content">
                                    <img src={send} alt='' /> <span>Project</span>

                                </div>

                                <div className="blog-card-content">
                                    <img src={send} alt='' /> <span>Renovations</span>

                                </div>

                                <div className="blog-card-content">
                                    <img src={send} alt='' /> <span >Uncategorized</span>

                                </div>


                                <div className="blog-card-content">
                                    <img src={send} alt='' /> <span>Home</span>

                                </div>

                            </div>

                            <div className='pt-5' style={{ textAlign: "justify" }}>
                                <p className="blog-card-main">Recent News</p>
                                <div className="blog-card-content">
                                    <Row>
                                        <Col lg="1" xs="1"><img src={send1} alt='' /></Col>
                                        <Col className='ps-3'>        <span style={{ color: "#C10023" }}>Bringing Great Design Ideas
                                            To Completion</span>
                                            <p style={{color:"#474747"}}>Sep 24, 2023</p></Col>

                                    </Row>


                                </div>
                                <div className="blog-card-content">
                                    <Row>
                                        <Col lg="1" xs="1"><img src={send} alt='' /> 
                                        </Col>
                                        <Col className='ps-3'>  <span>The Impact of Engine work
                                        for different types of cars</span>
                                        <p style={{color:"#474747"}}>Sep 24, 2023</p>
                                        </Col>
                                    </Row>
                                  

                                </div>

                                <div className="blog-card-content">
                                    <Row>
                                        <Col lg="1" xs="1"> <img src={send} alt='' /></Col>
                                        <Col className='ps-3'>  <span>We repair cars with care and attention to detail</span>
                                        <p style={{color:"#474747"}}>Sep 24, 2023</p></Col>
                                        
                                    </Row>
                                   

                                </div>



                            </div>
                        </div>

                        <div className='pt-5'>
                            <p className="blog-card-main">Tags</p>
                            <Container>
                                <Row className='d-flex justify-content-start'>
                                    <Col> <button className='contact-btn grow_spin p-3'>Design</button>
                                    </Col>
                                    <Col className='p-3'>Building
                                    </Col>
                                    <Col className='p-3'>Interior
                                    </Col>
                                    <Col className='p-3'>Construction
                                    </Col>
                                    <Col className='p-3'>Projects
                                    </Col>
                                    <Col className='p-3'>Service
                                    </Col>
                                </Row>
                            </Container>


                        </div>



                    </Col>

                </Row>
                </div>
            </Container>
        </div>
    )
}

export default Details