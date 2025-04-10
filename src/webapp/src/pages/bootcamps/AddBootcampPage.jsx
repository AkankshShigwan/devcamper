import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import bootcampService from '../../services/bootcampService';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const AddBootcampPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    description: '',
    careers: [],
    housing: false,
    jobAssistance: false,
    jobGuarantee: false,
    acceptGi: false,
  });

  const [error, setError] = useState(null);

  // TODO: Fix eslint error during page implementation
  // eslint-disable-next-line
  const { name, address, phone, email, website, description, careers, housing, jobAssistance, jobGuarantee, acceptGi } =
    formData;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await bootcampService.createBootcamp(formData);
      const bootcampId = response.data.id;
      navigate(`/bootcamps/${bootcampId}/courses/add`);
    } catch (error) {
      setError(error.message);
      toast.error(`Error occurred: ${error.message}`);
    }
  };

  // TODO: Add error handling
  if (error) return <h1>Error: {error}</h1>;

  return (
    <Container className="mt-5">
      <h1 className="mb-2">Add Bootcamp</h1>
      <p className='pb-3'>Important: You must be affiliated with a bootcamp to add to DevCamper</p>
      <Form onSubmit={onSubmit}>
        <Row className="row">
          <Col md={6}>
            <Card className="bg-white py-2 px-4 card-height">
              <Card.Body>
                <h3>Location & Contact</h3>
                <p className="text-muted">If multiple locations, use the main or largest</p>
                <Form.Group className="mt-3 mb-3" controlId="bootcamp_name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Bootcamp Name" required name="name" value={name} onChange={onChange} />
                </Form.Group>
                <Form.Group className="mt-3 mb-3" controlId="bootcamp_address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Full Address" required name="address" value={address} onChange={onChange} />
                  <Form.Text className="text-muted" style={{ fontSize: '0.75rem' }}>Street, city, state, etc.</Form.Text>
                </Form.Group>
                <Form.Group className="mt-3 mb-3" controlId="bootcamp_number">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Phone" required name="phone" value={phone} onChange={onChange} />
                </Form.Group>
                <Form.Group className="mt-3 mb-3" controlId="bootcamp_email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Contact email" required name="email" value={email} onChange={onChange} />
                </Form.Group>
                <Form.Group className="mt-3 mb-3" controlId="bootcamp_website">
                  <Form.Label>Website</Form.Label>
                  <Form.Control type="text" placeholder="Website URL" required name="website" value={website} onChange={onChange} />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="bg-white py-2 px-4 card-height">
              <Card.Body >
                <h3>Other Info</h3>
                <Form.Group className="mb-3" controlId="bootcamp_desc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={5} name="description" placeholder="Description (What you offer, etc)" maxLength="500" onChange={onChange} value={description} />
                  <Form.Text className="text-muted" style={{ fontSize: '0.75rem' }}>No more than 500 characters</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="bootcamp_career">
                  <Form.Label>Careers</Form.Label>
                  <Form.Select aria-label="" multiple defaultValue={['select']}>
                    <option value="select">Select all that apply</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                      type={type}
                      id={`Housing`}
                      label={`Housing`}
                    />
                    <Form.Check 
                      type={type}
                      id={`Job Assistance`}
                      label={`Job Assistance`}
                    />
                    <Form.Check 
                      type={type}
                      id={`Job Guarantee`}
                      label={`Job Guarantee`}
                    />
                    <Form.Check 
                      type={type}
                      id={`Accepts GI Bill`}
                      label={`Accepts GI Bill`}
                    />
                  </div>
                ))}
                <Form.Text className="text-muted" style={{ fontSize: '0.95rem' }}>*After you add the bootcamp, you can add the specific courses offered</Form.Text>
              </Card.Body>
            </Card>
          </Col>
          <div className="form-group my-4">
            <Button type="submit" variant="success" className='btn-block'>Submit Bootcamp</Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
};

export default AddBootcampPage;
