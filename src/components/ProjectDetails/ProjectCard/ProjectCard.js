import React from 'react'
import { Container, Row ,Col ,Card} from 'react-bootstrap';
import person4 from "../../../images/person-detail-4.svg";
import person5 from "../../../images/person-detail-5.svg";
import person6 from "../../../images/person-detail-6.svg";

function ProjectCard() {
  return (
    <div>
        <div className='project-div'>

       
        <Container>
        <p className='des-head'>Related Projects</p>
            <Row>
            <Col md="4">
          
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person4} />
                    </div>

                    <p className="service-head-main-team">Electrical & Maintanace </p>
                    <p className="footer-right-service-team ">House,  Office </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person5} />
                    </div>

                    <p className="service-head-main-team">Industry machine issue </p>
                    <p className="footer-right-service-team ">House,  Office </p>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ marginBottom: "30px" }}>
                  <div className="service-main-card-team">
                    <div style={{ textAlign: "justify" }}>
                      <Card.Img variant="top" src={person6} />
                    </div>

                    <p className="service-head-main-team">Industry machine issue </p>
                    <p className="footer-right-service-team ">House,  Office </p>
                  </div>
                </Card>
              </Col>
            </Row>
        </Container>
        </div>
        
    </div>
  )
}

export default ProjectCard