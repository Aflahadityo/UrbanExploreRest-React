import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const slider = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">URBAN EXPLORE REST</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#selectRoom">Select Room</Nav.Link>
          <Nav.Link href="#checkInCheckOut">Check In & Check Out</Nav.Link>
          <Nav.Link href="#adults">Adults</Nav.Link>
          <Nav.Link href="#children">Children</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-primary" href="#bookNow">Book Now</Button>
        </Form>
      </Navbar>

      {/* Add your other components like icons and texts below the Navbar */}
    </div> 
  );
}

export default slider;
