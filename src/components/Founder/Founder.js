import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function Founder() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col>
          <Image src="banner.jpg" fluid />
          <div className="overlay">
            <h1>Founder</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src="post1.jpg" thumbnail />
          <h3>Sample Post Title 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button variant="primary">See Details</Button>
        </Col>
        <Col>
          <Image src="post2.jpg" thumbnail />
          <h3>Sample Post Title 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button variant="primary">See Details</Button>
        </Col>
        <Col>
          <Image src="post3.jpg" thumbnail />
          <h3>Sample Post Title 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button variant="primary">See Details</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Founder;
