import { Badge, Card, Col, Container, Image, Row } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";

function UserDashboard(params) {
    return (
        <div className="mt-5">
            <Container className="justify-content-md-center">
                <h3 class="mb-3">Enrolled Bootcamps</h3>
                <Card className="bg-white p-4 mb-3">
                    <Row className="no-gutters">
                        <Col md={3}>
                            <Image src="images/image_1.jpg" class="card-img" alt="..." />
                        </Col>
                        <Col md={9}>
                            <Card.Body>
                                <Card.Title>
                                    <a href="bootcamp.html" >Devworks Bootcamp<span class="float-right badge badge-success">8.8</span></a>
                                </Card.Title>
                                <Badge bg="dark" className="mb-2">Boston, MA</Badge>
                                <Card.Text>
                                    Web Development, UI/UX, Mobile Development
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <div class="mb-3">
                                    <h5 class="bg-dark text-white py-1 px-2">Review</h5>
                                    <div class="px-2">
                                        <div class="text-warning">★★★★</div>
                                        <Card.Text>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing
                                            elit. Commodi similique mollitia, praesentium, animi
                                            harum officia dolores corporis ex tempore consequuntur
                                            dolorem ullam dolorum magnam corrupti ....
                                        </Card.Text>
                                        <p>View more</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>

                <Card className="bg-white p-4 mb-3">
                    <Row className="no-gutters">
                        <Col md={3}>
                            <Image src="images/image_1.jpg" class="card-img" alt="..." />
                        </Col>
                        <Col md={9}>
                            <Card.Body>
                                <Card.Title>
                                    <a href="bootcamp.html" >Devworks Bootcamp<span class="float-right badge badge-success">8.8</span></a>
                                </Card.Title>
                                <Badge bg="dark" className="mb-2">Boston, MA</Badge>
                                <Card.Text>
                                    Web Development, UI/UX, Mobile Development
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <div class="mb-3">
                                    <h5 class="bg-dark text-white py-1 px-2">Review</h5>
                                    <Col md={3} className="p-0">
                                        <div class="d-flex align-items-center">
                                            <Link to={`add-review.html`} class="btn btn-light btn-block my-3">
                                                <GrEdit /> Write a Review
                                            </Link>

                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
};

export default UserDashboard;