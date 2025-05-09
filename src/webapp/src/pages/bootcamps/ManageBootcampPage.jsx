import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import bootcampService from '../../services/bootcampService';
import { Badge, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';

const ManageBootcampPage = () => {
  const { bootcampId } = useParams();
  const [bootcamp, setBootcamp] = useState({});

  useEffect(() => {
    const fetchBootcamp = async () => {
      const res = await bootcampService.getBootcamp(bootcampId);
      setBootcamp(res.data);
    };
    fetchBootcamp();
  }, [bootcampId]);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="m-auto">
          <Card className="bg-white py-2 px-4">
            <Card.Body >
              <h1 className="mb-4">Manage Bootcamp</h1>
              <Card className="mb-3">
                <Row className="no-gutters">
                  <Col md={4}>
                    <Image src="/images/image_1.jpg" className="img-thumbnail" alt="" />
                  </Col>
                  <Col md={8}>
                    <Card.Body className="card-body">
                      <Card.Title >
                        <Link to="/bootcamps/:bootcampId">
                          {bootcamp.name}
                          <Badge bg="success" className="float-right">{8}</Badge>
                        </Link>
                      </Card.Title>
                      <Badge bg={"dark"} className="mb-2">
                        {"Juinagar"}
                      </Badge>
                      <p class="card-text">{bootcamp.description}</p>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>

              <Form className="mb-4">
                <Form.Group controlId="custom-file">
                  <div className="custom-file mb-3">
                    <Form.Control type="file" name="photo" className="custom-file-input" id="photo" />
                    <Form.Label className="custom-file-label" htmlFor="photo">Add Bootcamp Image</Form.Label>
                  </div>
                </Form.Group>
                <input type="submit" className="btn btn-light btn-block" value="Upload Image" />
              </Form>
              <Link to="/bootcamps/add" className="btn btn-success btn-block">
                Edit Bootcamp Details
              </Link>
              <Link to={`/bootcamps/${bootcampId}}/courses/manage`} className="btn btn-primary btn-block">
                Manage Courses
              </Link>
              <Link to="/bootcamps/:bootcampId/managebootcamp/add" className="btn btn-secondary btn-block">
                Remove Bootcamp
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageBootcampPage;
