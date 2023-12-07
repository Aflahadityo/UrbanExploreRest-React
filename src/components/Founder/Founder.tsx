import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Founder() {
  return (
    <Container className="my-5">
      <Row className="align-items-center mt-5">
        <Col>
          <Image src="https://picsum.photos/id/144/1920/1080" fluid />
          <div className="overlay mt-5">
            <h1>Founder</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src="https://picsum.photos/id/144/300/200" thumbnail />
          <h3>Sample Post Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button variant="primary">See Details</Button>
        </Col>
        <Col>
          <Image src="https://picsum.photos/id/222/300/200" thumbnail />
          <h3>Sample Post Title 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button variant="primary">See Details</Button>
        </Col>
        <Col>
          <Image src="https://picsum.photos/id/212/300/200" thumbnail />
          <h3>Sample Post Title 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button variant="primary">See Details</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Founder;
