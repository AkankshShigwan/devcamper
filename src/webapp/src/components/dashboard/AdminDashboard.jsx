import React from "react";
import { Badge, Card, Col, Container, Image, Row } from "react-bootstrap";
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="mt-5">
      <Container className="justify-content-md-center">

        {/* Active Users */}
        <Row>
          <Col md={6}>
            <Card className="card-body mb-4">
              <h4 className="mb-3">Active Users</h4>
              <h1 className="mb-3 user-count text-success">40</h1>
            </Card>
          </Col>

          {/* Latest Reviews */}
          <Col md={6}>
            <Card className="card-body mb-4">
              <h4 className="mb-3">Latest Reviews</h4>
              <div>
                <div className="d-flex align-items-center">
                <FaUser className="me-2" />
                <span>Kevin Smith</span>
                  <div className="text-warning mx-2">★★★★★</div>
                </div>
                <p className="card-text">Lorem, ipsum dolor sit amet .....</p>
              </div>

              <div className="mt-2">
                <div className="d-flex align-items-center">
                <FaUser className="me-2" />
                  <span>Kevin Smith</span>
                  <div className="text-warning mx-2">★★★</div>
                </div>
                <p className="card-text">Lorem, ipsum dolor sit amet .....</p>
              </div>
            </Card>
          </Col>
        </Row>
        <h3 className="mb-3">Top Rated Bootcamps</h3>
        {/* Bootcamps */}
        <div className="my-3">
          <Card className="mb-3">
            <Row className="row no-gutters">
              <Col md={3}>
                <Image src="images/image_1.jpg" className="card-img rounded-0" alt="..." />
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title>
                    <Link to="/bootcamps/:bootcampId">
                      Devworks Bootcamp
                      <span className="float-right badge badge-success">9.8</span>
                    </Link>
                  </Card.Title>
                  <Badge bg="dark" className="mb-2">
                    Boston, MA
                  </Badge>
                  <Card.Text>
                    Web Development, UI/UX, Mobile Development
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3">
            <Row className="row no-gutters">
              <Col md={3}>
                <Image src="images/image_2.jpg" className="card-img rounded-0" alt="..." />
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title>
                    <Link to="/bootcamps/:bootcampId">
                      ModernTech Bootcamp
                      <span className="float-right badge badge-success">7.5</span>
                    </Link>
                  </Card.Title>
                  <Badge bg="dark" className="mb-2">
                    Boston, MA
                  </Badge>
                  <Card.Text>
                    Web Development, UI/UX, Mobile Development
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3">
            <Row className="row no-gutters">
              <Col md={3}>
                <Image src="images/image_3.jpg" className="card-img rounded-0" alt="..." />
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title>
                    <Link to="/bootcamps/:bootcampId">
                      Codemasters
                      <span className="float-right badge badge-success">7.2</span>
                    </Link>
                  </Card.Title>
                  <Badge bg="dark" className="mb-2">
                    Burlington, VT
                  </Badge>
                  <Card.Text>
                    Web Development, Data Science, Marketing
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3">
            <Row className="row no-gutters">
              <Col md={3}>
                <Image src="images/image_4.jpg" className="card-img rounded-0" alt="..." />
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title>
                    <Link to="/bootcamps/:bootcampId">
                      DevCentral Bootcamp
                      <span className="float-right badge badge-success">6.4</span>
                    </Link>
                  </Card.Title>
                  <Badge bg="dark" className="mb-2">
                    Kingston, RI
                  </Badge>
                  <Card.Text>
                    Web Development, UI/UX, Mobile Development, Marketing
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default AdminDashboard;
