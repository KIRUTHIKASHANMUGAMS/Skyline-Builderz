import React, { useState } from 'react';
import Construction from "../../../images/construction.svg"
import { Container, Col, Row } from 'react-bootstrap'
import quotation1 from "../../../images/quotation1.svg"
import quotation2 from "../../../images/quotation2.svg"
import search from "../../../images/Search.svg";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import send from "../../../images/Send.svg"




function Details() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeTag, setActiveTag] = useState('Design');

    const tags = ['Design', 'Building', 'Interior','Renovate' , 'Projects', 'Service'];

    const handleTagClick = (tag) => {
        setActiveTag(tag);
    };


    const categories = [
        { name: "Big buildings", img: send },
        { name: "Project", img: send },
        { name: "Renovations", img: send },
        { name: "Uncategorized", img: send },
        { name: "Home", img: send },
    ];


    const recent = [
        { name: "Bringing Great Design Ideas To Completion", img: send, date: "Sep 24, 2023" },
        { name: "The Impact of Engine work for different types of cars", img: send, date: "Sep 24, 2023" },
        { name: "We repair cars with care and attention to detail", img: send, date: "Sep 24, 2023" },

    ]




    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };


    return (
        <div>
            <Container>
                <div className='blog-category'>


                    <Row>

                        <Col lg="9" md="8">
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
                        <Col lg="3" md="4">
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
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="blog-card-content"
                                            onClick={() => handleCategoryClick(category.name)}
                                            style={{ cursor: 'pointer', fontWeight: activeCategory === category.name ? 'bold' : 'normal', color: activeCategory === category.name ? '#C10023' : 'black' }}
                                        >
                                            <img src={category.img} alt={category.name} />
                                            <span className='ps-2'>{category.name}</span>
                                        </div>
                                    ))}
                                </div>


                                <div className='pt-5' style={{ textAlign: "justify" }}>
                                    <p className="blog-card-main">Recent News</p>
                                    {recent.map((category, index) => (
                                        <div
                                            key={index}
                                            className="blog-card-content"
                                            onClick={() => handleCategoryClick(category.name)}
                                            style={{ cursor: 'pointer', fontWeight: activeCategory === category.name ? 'bold' : 'normal', color: activeCategory === category.name ? '#C10023' : 'black' }}
                                        >
                                            <Row>
                                                <Col lg="1" xs="1"><img src={category.img} alt='' /></Col>
                                                <Col className='ps-3'>        <span >{category.name}</span>
                                                    <p style={{ color: "#474747" }}>{category.date}</p></Col>

                                            </Row>

                                        </div>
                                    ))}


                                </div>





                            </div>

                            <div className='pt-5'>
                                <p className="blog-card-main">Tags</p>
                                <Container>
                                    <Row>
                                        {tags.map((tag, index) => (
                                            <Col lg={6} xs={6} key={index} >
                                                <p
                                                    className={` p-2 ${activeTag === tag ? 'contact-btn' : ''}`}
                                                    onClick={() => handleTagClick(tag)}
                                                >
                                                    {tag}
                                                </p>
                                            </Col>
                                        ))}
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