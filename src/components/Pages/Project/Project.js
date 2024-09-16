import React , {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import person1 from "../../../images/person-detail-1.svg";
import person2 from "../../../images/person-details-2.svg";
import person3 from "../../../images/person-detail-3.svg";
import person4 from "../../../images/person-detail-4.svg";
import person5 from "../../../images/person-detail-5.svg";
import person6 from "../../../images/person-detail-6.svg";
import person7 from "../../../images/person-detail-7.svg";
import person8 from "../../../images/person-detail-8.svg";
import person9 from "../../../images/person-detail-9.svg";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Modal } from "react-bootstrap";

function Project() {

  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (details) => {
    setSelectedBlog(details);
    setShowModal(true);
  };

  const details = [
    { name: "Lawn Landscape", content: "House, Office", img: person1 },
    { name: "Living Room", content: "House, Office", img: person2 },
    { name: "Industry machine issue", content: "House, Office", img: person3 },
    { name: "Electrical & Maintanace", content: "House, Office", img: person4 },
    { name: "Industry machine issue", content: "House, Office", img: person5 },
    { name: "Industry machine issue", content: "House, Office", img: person6 },
    { name: "Electrical & Maintanace", content: "House, Office", img: person7 },
    { name: "Lawn Landscape", content: "House, Office", img: person8 },
    { name: "Living Room", content: "House, Office", img: person9 },



  ]
  return (
    <div>
      <div>
        <Container>
          <div className="team-page">

            <div>
              <Row>
                {details.map((details) => (
                  <Col md="4">
                    <Link to="/project-details">
                      <Card style={{ marginBottom: "30px" }}>
                        <div className="service-main-card-team">
                          <div onClick={() => handleShow(details)} style={{ textAlign: "justify" }}>
                            <Card.Img variant="top" src={details.img} />
                          </div>

                          <p className="service-head-main-team"> {details.name} </p>
                          <p className="footer-right-service-team"> {details.content}  </p>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                ))}

              
               
              </Row>
            </div>
          </div>


          {selectedBlog && (
            <Modal show={showModal} onHide={handleClose}>

              <Card.Img className="mx-auto" src={selectedBlog.img} />


            </Modal>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Project;
