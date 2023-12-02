import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const rooms = [
  {
    name: 'Standard Single Room',
    price: '$5/night',
    image: 'single.jpg',
  },
  {
    name: 'Standard Couple Room',
    price: '$7/night',
    image: 'couple.jpg',
  },
  {
    name: 'Standard Double Room',
    price: '$9/night',
    image: 'double.jpg',
  },
  {
    name: 'VIP Room',
    price: '$11/night',
    image: 'vip.jpg',
  },
];

const App = () => {
  return (
    <Container>
      <h1>Rooms and Suites</h1>
      <Row>
        {rooms.map((room) => (
          <Col md={3} key={room.name}>
            <Card>
              <Card.Img variant="top" src={room.image} />
              <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Text>{room.price}</Card.Text>
                <Button variant="primary">See Detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="danger" className="mt-3">SEE ALL ROOMS</Button>
    </Container>
  );
};

export default App;
