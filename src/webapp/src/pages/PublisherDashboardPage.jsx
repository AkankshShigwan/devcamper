import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import bootcampService from '../services/bootcampService';

function PublisherDashboard() {

    const [bootcamps, setBootcamps] = useState([]);
      const [fetchError, setFetchError] = useState(null);
      const [loading, setLoading] = useState(true);
    
      // Load bootcamps from API
      useEffect(() => {
        const fetchBootcamps = async () => {
          try {
            const fields = ['photo', 'name', 'averageRating', 'location', 'careers', 'id'];
            const res = await bootcampService.getBootcamps(fields);
            setBootcamps(res.data);
            setFetchError(null);
          } catch (error) {
            setFetchError(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchBootcamps();
      }, []);

      console.log('bootcamps', bootcamps);

    return (
        <div className="mt-5">
            <Container className="justify-content-md-center">
            {bootcamps.map((bootcamp) => (
                <Card className="mb-3">
                    <Row className="no-gutters">
                        <Col md={3}>
                            <Image src={`/images/${bootcamp.photo}`} alt="..." />
                        </Col>
                        <Col md={9}>
                            <CardBody>
                                <Card.Title>
                                    <a href="bootcamp.html">{bootcamp.name}
                                        <span className="float-right badge badge-success">{bootcamp.averageRating}</span>
                                    </a>
                                </Card.Title>
                                <Badge bg="dark" className="mb-2">{bootcamp.location.city}, {bootcamp.location.state}</Badge>
                                <Card.Text className="card-text">
                                {bootcamp.careers.join(', ')}
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
            ))}
                
            </Container>
        </div>
    )
}

export default PublisherDashboard;