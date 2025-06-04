import React, { useState, useEffect } from 'react';
import bootcampService from '../../services/bootcampService';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { GrClose, GrEdit } from 'react-icons/gr';

const ManageBootcampsPage = () => {
  const { user } = useAuth();
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const res = await bootcampService.getBootcampsByPublisher(user.id);
        setBootcamps(res.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchBootcamps();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container className="mt-5">
      <Row >
        <Col md={8} className='m-auto'>
          <Card className="bg-white py-2 px-4">
            <Card.Body >
              <h1 className="mb-4">Manage Bootcamps</h1>
              <Table striped hover>
                <thead>
                  <tr>
                    <th scope="col">Bootcamp</th>
                    <th scope="col">Rating</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {bootcamps.map((b) => (
                    <tr key={b.id}>
                      <td>{b.name}</td>
                      <td>8</td>
                      <td className='text-center'>
                        <Link to={`/bootcamps/${b.id}/manage`}>
                          <Button variant="secondary" className="me-2 mb-1">
                            <GrEdit />
                          </Button>
                        </Link>
                        <Button variant="danger" className="mb-1">
                          <GrClose />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageBootcampsPage;
