import React , {useState} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import person1 from "../../../images/person-1.webp";
import person2 from "../../../images/person-2.webp";

import person3 from "../../../images/person-3.webp";

import person4 from "../../../images/person-4.webp";

import person5 from "../../../images/person-5.webp";

import person6 from "../../../images/person-6.webp";
import person7 from "../../../images/person-7.webp";
import person8 from "../../../images/person-8.webp";
import person9 from "../../../images/person-9.webp";

import { Card } from 'react-bootstrap';
import arrow from "../../../images/arrow -button.svg";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


function Service() {

    const details = [
        {
            name: "Heating Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: person1
        },
        {
            name: "Roofing Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: person2
        },
        {
            name: "Flooring Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: person3
        },
        {
            name: "Painting Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: person4
        },
        {
            name: "Plumbing Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: person5
        },
        {
            name: "Electrical Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: person6
        },
        {
            name: "Carpentry Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: person7
        },
        {
            name: "Renovation Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: person9
        },
        {
            name: "Washing Services", content: "Aenean massa sociis natoque penatibus et magnis dis parturient montes,", button: "Read More", img: person8
        },
    ]

    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleClose = () => setShowModal(false);
    const handleShow = (details) => {
        setSelectedBlog(details);
        setShowModal(true);
    };



    return (
        <div>
            <div>
                <Container>
                    <div className='service-card-details'>


                        <Row>

                            {details.map((details) => (

                                <Col lg="4" md="6" xs="12">
                                    <Card style={{ marginBottom: "30px" }}>

                                        <div style={{ textAlign: "justify" }} onClick={() => handleShow(details)}>
                                            <Card.Img variant="top" className='service-details-main' src={details.img}  style={{ width: "100%", height: "auto" }}   alt="Description of the image" />
                                        </div>
                                        <div className="service-card">
                                            <p ><button className="service-card-team">{details.name}</button>  </p>
                                            <p className="service-card-sub"> {details.content}</p>

                                            <Link to="/service-details" ><button className='contact-btn-service grow_spin'> {details.button} <img src={arrow} alt='' style={{ paddingLeft: "10px" }} /> </button>
                                            </Link>
                                        </div>
                                    </Card>
                                </Col>
                            ))}


                        </Row>
                    </div>

                    {selectedBlog && (
                <Modal show={showModal} onHide={handleClose}>

                        <Card.Img   className="mx-auto"  src={selectedBlog.img}  style={{ width: "100%", height: "auto" }}   alt="Description of the image"/>

                  
                </Modal>
            )}

                </Container>
            </div>
        </div>
    );
}

export default Service;
