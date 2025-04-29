import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap';
import { FaStar, FaUser } from 'react-icons/fa';
import bootcampService from '../services/bootcampService';
import reviewService from '../services/reviewService';


function PublisherDashboard() {

    const [bootcamps, setBootcamps] = useState([]);
    const [reviewsByBootcamp, setReviewsByBootcamp] = useState({});

    // Load bootcamps from API
    const fetchBootcamps = async () => {
        try {
            const fields = ['photo', 'name', 'averageRating', 'location', 'careers', 'id'];
            const res = await bootcampService.getBootcamps(fields);

            setBootcamps(res.data);
            // Load review for particular bootcamps from API
            fetchBootcamp_reviews(res.data);
        } catch (error) {
            console.log(error.message);
        } finally {
            console.log(false);
        }
    };

    const fetchBootcamp_reviews = async (bootcamp_data) => {
        const allReviews = {};
        for (const bootcampData of bootcamp_data) {
            const reviewsResult = await reviewService.getReviewsByBootcamp(bootcampData.id);
            allReviews[bootcampData.id] = reviewsResult.data;
        }
        setReviewsByBootcamp(allReviews);
    }


    useEffect(() => {
        fetchBootcamps();
    }, []);

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
                                    {reviewsByBootcamp[bootcamp.id]?.length > 0 ? (
                                        reviewsByBootcamp[bootcamp.id]?.slice(0,2).map((review) => (
                                            <Card.Body key={review._id || Math.random()}> {/* Added a key for each review */}
                                                <div className="d-flex align-items-center">
                                                    <FaUser className='mr-2' />
                                                    <span>{review?.title}</span>
                                                </div>
                                                <div className="text-warning">{[...Array(review?.rating)].map((_, index) => (
                                                    <FaStar key={`full-${index}`} className="text-warning" />
                                                ))}</div>
                                                <Card.Text>{review?.text}</Card.Text>
                                            </Card.Body>
                                            
                                        ))
                                    ) : (
                                        <Card.Body>No reviews available for this bootcamp.</Card.Body>
                                    )}
                                    {reviewsByBootcamp[bootcamp.id]?.length > 2 && <p className='px-4'>View more</p>}
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