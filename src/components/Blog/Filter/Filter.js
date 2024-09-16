import { Col, Container, Row, Card, Modal } from 'react-bootstrap';
import Filter from "../../../images/filter.svg";
import sortby1 from "../../../images/sortby1.svg";
import sortby2 from "../../../images/sortby2.svg";
import sortby3 from "../../../images/sortby3.svg";
import sortby4 from "../../../images/sortby4.svg";
import Downarrow from "../../../images/downarrow.svg"
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
import React, { useState } from 'react';


function FilterPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleClose = () => setShowModal(false);
    const handleShow = (blog) => {
        setSelectedBlog(blog);
        setShowModal(true);
    };

    const blogs = [
        {
            img: Blog1,
            button: "Building",
            title: "Home Construction In Malibu Beach, USA",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Tracy Wilson",
            date: "August 20, 2022",
            person: BlogPerson2,
        },
        {
            img: Blog2,
            button: "Construction",
            title: "Systematic project helps to match more impact",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Jenny Wilson",
            person: BlogPerson1,
            date: "August 20, 2022"
        },
        {
            img: Blog3,
            button: "Design",
            title: "Creating Home Service That Make Difference",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Albert Flores",
            person: BlogPerson3,
            date: "August 20, 2022"
        },
        {
            img: Blog4,
            button: "Design",

            title: "Start A Construction Business In 2024",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Anette Black",
            person: BlogPerson1,
            date: "August 20, 2022"
        },
        {
            img: Blog5,
            button: "Construction",

            title: "Systematic Project Helps To Match More Impact",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Floyd Miles",
            person: BlogPerson2,

            date: "August 20, 2022"
        },
        {
            img: Blog6,
            button: "Design",

            title: "World’s Largest Home Buildings Construction",
            content: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque.",
            author: "Cody Fisher",
            person: BlogPerson3,
            date: "August 20, 2022"
        }
    ];

    return (
        <div>
            <div className='filter-page'>
                <Container>
                    <div className='filter-main-div'>

                        <div className='filter-main'>
                            <button className="filter-button grow_spin">
                                <img src={Filter} alt="welcome" />{" "}
                                <small className="about-welcome-blog"> Filter </small>
                            </button>
                        </div>

                        <div>

                            <small className="about-welcome"> Sort By        <img src={Downarrow} alt="welcome" />{" "} </small>



                            <img src={sortby1} alt='' className='filter-img-1' />

                            <img src={sortby2} alt='' className='filter-img' />

                            <img src={sortby3} alt='' className='filter-img' />

                            <img src={sortby4} alt='' className='filter-img' />
                        </div>

                    </div>
                    <div className='construction-blog'>
                        <Row>
                            {blogs.map((blog, index) => (
                                <Col lg="4" md="6" xs="12" key={index}>
                                    <Card style={{ marginBottom: "30px" }}>
                                        <div className='card-filter'>
                                            <div style={{ textAlign: "justify" }} onClick={() => handleShow(blog)}>
                                                <Card.Img variant="top" src={blog.img} style={{ cursor: 'pointer' }} />
                                            </div>
                                            <div style={{ textAlign: "justify", marginTop: "15px" }}>
                                                <Card.Title>
                                                    <Link to="/blog-details">
                                                        <button className="filter-button-card grow_spin">{blog.button}</button>
                                                    </Link>
                                                </Card.Title>
                                                <div className='card-div-content'>
                                                    <p className="blog-card-main">{blog.title}</p>
                                                    <p className="blog-card-content">{blog.content}</p>
                                                </div>
                                                <Row>
                                                    <Col lg="7" md="6" xs="6">
                                                        <div>


                                                            <img src={blog.person} alt='' className='filter-img' />
                                                            <small className='filter-tum-content'>{blog.author}</small>
                                                        </div>
                                                    </Col>
                                                    <Col lg="5" md="6" xs="6">
                                                        <p className='filter-para-details'>{blog.date}</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
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
                    </Pagination>
                </Container>
            </div>

            {/* Modal for blog details */}
            {selectedBlog && (
                <Modal show={showModal} onHide={handleClose}>

                    <Card.Img className="mx-auto" src={selectedBlog.img} />


                </Modal>
            )}
        </div>
    );
}

export default FilterPage;
