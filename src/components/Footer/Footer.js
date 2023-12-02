import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>
          <h6>Site Links</h6>
          <ul>
            <li>Photo Gallery</li>
            <li>Video Gallery</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </Col>

        <Col>
          <h6>Useful Link</h6>
          <ul>
            <li>Home</li>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
          </ul>

        </Col>

        <Col>
          <h6>Contact</h6>
          <p>34 Wilshire Blvd., Los Angeles CA</p>
          <p>+121-3412-868</p>
          <p>urbanexplorer@gmail.com</p>
        </Col>

        <Col>
          <h6>Newsletter</h6>
          <p>Subscribe for latest news</p>
          <Button variant="danger">SUBSCRIBE NOW</Button>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <p>Copyright @2023 UrbanExploreRest Kel. 6</p>
        </Col>
      </Row>
    </Container >
  );
};

export default Footer;
