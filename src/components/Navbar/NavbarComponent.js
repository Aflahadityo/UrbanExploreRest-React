import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="ml-auto d-flex align-items-center justify-content-between">
        <span className="mr-3">
          {/* Add phone and email icons and text here */}
          Phone: 021-319-2023 Email: urbanexplorerest@gmail.com
        </span>
        <span>
          {/* Add Cart, Sign Up, and Sign In buttons or links here */}
          Cart | Sign Up | Sign In
        </span>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center justify-content-center">
        <Nav className="mr-auto mt-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <NavDropdown title="Room&Suite" id="basic-nav-dropdown">
            {/* Add dropdown items here */}
            <NavDropdown.Item href="#action/3.1">
              Standard Single Room
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              Standard Couple Room
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              Standard Double Room
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              Standard Vip Room
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Gallery" id="basic-nav-dropdown">
            {/* Add dropdown items here */}
            <NavDropdown.Item href="#action/3.2">
              Photo Gallery
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Video Gallery
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>

        {/* Right aligned nav items */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
