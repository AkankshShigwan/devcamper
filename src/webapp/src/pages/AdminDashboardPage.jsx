import React, { useEffect, useState } from 'react';
import { Badge, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FaUser, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bootcampService from '../services/bootcampService';
import reviewService from '../services/reviewService';

function AdminDashboardPage() {
  const [bootcamps, setBootcamps] = useState([]);
  const [reviewsByBootcamp, setReviewsByBootcamp] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fields = ['photo', 'name', 'averageRating', 'location', 'careers', 'id'];
        const res = await bootcampService.getBootcamps(fields);
        setBootcamps(res.data);

        const allReviews = {};
        for (const bc of res.data) {
          const reviewsRes = await reviewService.getReviewsByBootcamp(bc._id);
          allReviews[bc.id] = reviewsRes.data;
        }
        setReviewsByBootcamp(allReviews);
      } catch (err) {
        console.error('Error loading dashboard data', err);
      }
    };
    fetchData();
  }, []);

  const activeCount = bootcamps.length;

  const latestReviews = Object.values(reviewsByBootcamp)
    .flat()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 2);

  const topBootcamps = [...bootcamps]
    .sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0))
    .slice(0, 4);

  return (
    <div className="mt-5">
      <Container className="justify-content-md-center">
        {/* Active Users */}
        <Row>
          <Col md={6}>
            <Card className="card-body mb-4">
              <h4 className="mb-3">Active Bootcamps</h4>
              <h1 className="mb-3 user-count text-success">{activeCount}</h1>
            </Card>
          </Col>

          {/* Latest Reviews */}
          <Col md={6}>
            <Card className="card-body mb-4">
              <h4 className="mb-3">Latest Reviews</h4>
              {latestReviews.map((review) => (
                <div key={review._id} className="mb-3">
                  <div className="d-flex align-items-center">
                    <FaUser className="me-2" />
                    <span>{review.user?.name || 'Anonymous'}</span>
                    <div className="text-warning mx-2">
                      {[...Array(review.rating)].map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                    </div>
                  </div>
                  <p className="card-text">{review.text}</p>
                </div>
              ))}
            </Card>
          </Col>
        </Row>

        {/* Top Rated Bootcamps */}
        <h3 className="mb-3">Top Rated Bootcamps</h3>
        <div className="my-3">
          {topBootcamps.map((bc) => (
            <Card className="mb-3" key={bc.id}>
              <Row className="no-gutters">
                <Col md={3}>
                  <Image
                    src={`/images/${bc.photo}`}
                    className="card-img rounded-0"
                    alt={bc.name}
                  />
                </Col>
                <Col md={9}>
                  <Card.Body>
                    <Card.Title>
                      <Link to={`/bootcamps/${bc.id}`}>
                        {bc.name}
                        <span className="float-right badge badge-success">
                          {bc.averageRating || 'N/A'}
                        </span>
                      </Link>
                    </Card.Title>
                    <Badge bg="dark" className="mb-2">
                      {bc.location?.city || 'Unknown City'}, {bc.location?.state || 'Unknown State'}
                    </Badge>
                    <Card.Text>
                      {bc.careers?.join(', ') || 'N/A'}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AdminDashboardPage;