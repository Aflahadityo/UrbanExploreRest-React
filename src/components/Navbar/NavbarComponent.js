import React from "react";
import { Navbar, Nav, NavDropdown, Button, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Row className="align-items-center mr-auto">
          <Col>
            <div className="text-light">
              Email: example@example.com | Phone: 021-123-4567
            </div>
          </Col>
          <Col className="ml-auto">
            <Button variant="outline-light" href="#SignUp.js">
              Sign Up
            </Button>
          </Col>
          <Col className="ml-auto">
            <Button variant="outline-light" href="/Login">
              Sign In
            </Button>
          </Col>
          <Col className="ml-auto">
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Col>
        </Row>
      </Navbar>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">UrbanExploreRest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mx-auto">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <NavDropdown title="Room&Suite" id="room-suite-dropdown">
              <NavDropdown.Item href="#room-1">Deluxe Room</NavDropdown.Item>
              <NavDropdown.Item href="#room-2">Superior Room</NavDropdown.Item>
              <NavDropdown.Item href="#room-3">Executive Suite</NavDropdown.Item>
              <NavDropdown.Item href="#room-4">Presidential Suite</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gallery" id="gallery-dropdown">
              <NavDropdown.Item href="#gallery-1">
                Hotel Exterior
              </NavDropdown.Item>
              <NavDropdown.Item href="#gallery-2">
                Hotel Interior
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
