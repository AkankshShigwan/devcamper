import React from 'react';
import { Badge, Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

function publisherDashboard() {
    return (
        <div className="mt-5">
            <Container className="justify-content-md-center">
                <Card className="mb-3">
                    <Row className="no-gutters">
                        <Col md={3}>
                            <Image src="images/image_1.jpg" alt="..." />
                        </Col>
                        <Col md={9}>
                            <CardBody>
                                <Card.Title>
                                    <a href="bootcamp.html">Devworks Bootcamp
                                        <span className="float-right badge badge-success">8.8</span>
                                    </a>
                                </Card.Title>
                                <Badge bg="dark" className="mb-2">Boston, MA</Badge>
                                <Card.Text className="card-text">
                                    Web Development, UI/UX, Mobile Development
                                </Card.Text>
                            </CardBody>
                        </Col>
                    </Row>
                    {/* <!-- <hr className="dashed-hr"> --> */}
                    <Row className="no-gutters mt-4">
                        <Col md={12}>
                            <div className="mb-3">
                                <Card.Header className="bg-dark text-white">Reviews</Card.Header>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <FaUser className='mr-2' />
                                        <span>Kevin Smith</span>
                                    </div>
                                    <div className="text-warning">★★★★★</div>
                                    <Card.Text>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Commodi similique mollitia, praesentium, animi harum officia
                                        dolores corporis ex tempore ....
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <FaUser className='mr-2' />
                                        <span>Jill Samson</span>
                                    </div>
                                    <div className="text-warning">★★★★</div>
                                    <Card.Text>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Commodi similique mollitia, praesentium, animi harum officia
                                        dolores corporis ex tempore consequuntur dolorem ullam
                                        dolorum magnam corrupti ....
                                    </Card.Text>
                                    <p>View more</p>
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </Card>

                <Card className="mb-3">
                    <Row className="no-gutters">
                        <Col md={3}>
                            <Image src="images/image_1.jpg" alt="..." />
                        </Col>
                        <Col md={9}>
                            <CardBody>
                                <Card.Title>
                                    <a href="bootcamp.html">Devworks Bootcamp
                                        <span className="float-right badge badge-success">8.8</span>
                                    </a>
                                </Card.Title>
                                <Badge bg="dark" className="mb-2">Boston, MA</Badge>
                                <Card.Text className="card-text">
                                    Web Development, UI/UX, Mobile Development
                                </Card.Text>
                            </CardBody>
                        </Col>
                    </Row>
                    {/* <!-- <hr className="dashed-hr"> --> */}
                    <Row className="no-gutters mt-4">
                        <Col md={12}>
                            <div className="mb-3">
                                <Card.Header className="bg-dark text-white">Reviews</Card.Header>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <FaUser className='mr-2' />
                                        <span>Kevin Smith</span>
                                    </div>
                                    <div className="text-warning">★★★★★</div>
                                    <Card.Text>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Commodi similique mollitia, praesentium, animi harum officia
                                        dolores corporis ex tempore ....
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <FaUser className='mr-2' />
                                        <span>Jill Samson</span>
                                    </div>
                                    <div className="text-warning">★★★★</div>
                                    <Card.Text>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Commodi similique mollitia, praesentium, animi harum officia
                                        dolores corporis ex tempore consequuntur dolorem ullam
                                        dolorum magnam corrupti ....
                                    </Card.Text>
                                    <p>View more</p>
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default publisherDashboard;