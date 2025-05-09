import React, { useEffect, useState } from 'react';
import { Badge, Card, Col, Container, Image, Row } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import bootcampService from '../services/bootcampService';
import reviewService from '../services/reviewService';

const Dashboard = () => {

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

  return <div>
    <div className="mt-5">
      <Container className="justify-content-md-center">
        <h3 className="mb-3">Enrolled Bootcamps</h3>
        {bootcamps.map((bootcamp) => (
          <Card className="bg-white p-4 mb-3">
            <Row className="no-gutters">
              <Col md={3}>
                <Image src={`/images/${bootcamp.photo}`} className="card-img" alt="..." />
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title>
                    <a href="bootcamp.html" >{bootcamp.name}<span className="float-right badge badge-success">{bootcamp.averageRating}  </span></a>
                  </Card.Title>
                  <Badge bg="dark" className="mb-2">{bootcamp.location.city}, {bootcamp.location.state}</Badge>
                  <Card.Text>
                    {bootcamp.careers.join(', ')}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <div className="mb-3">
                    <h5 className="bg-dark text-white py-1 px-2">Review</h5>
                    <div className="px-2">
                      {reviewsByBootcamp[bootcamp.id]?.length > 0 ? (
                        <>
                          <div className="text-warning">★★★★</div>
                          <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi similique mollitia, praesentium, animi
                            harum officia dolores corporis ex tempore consequuntur
                            dolorem ullam dolorum magnam corrupti ....
                          </Card.Text>
                          {/* <p>View more</p> */}
                        </>

                      ) : (
                        <Card.Body>No reviews available for this bootcamp.</Card.Body>
                      )}
                      {reviewsByBootcamp[bootcamp.id]?.length > 2 && <p className=''>View more</p>}
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </div>
  </div>;
};

export default Dashboard;
