import { Navbar, Nav, NavDropdown, Container, Stack } from "react-bootstrap";

const NavbarMain = () => {
  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <Navbar.Brand href="/">UrbanExploreRest</Navbar.Brand>
        <Navbar className="ms-auto" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mx-auto">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <NavDropdown title="Room&Suite" id="room-suite-dropdown">
                <NavDropdown.Item href="/room-1">Deluxe Room</NavDropdown.Item>
                <NavDropdown.Item href="/room-2">
                  Superior Room
                </NavDropdown.Item>
                <NavDropdown.Item href="/room-3">
                  Executive Suite
                </NavDropdown.Item>
                <NavDropdown.Item href="/room-4">
                  Presidential Suite
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gallery" id="gallery-dropdown">
                <NavDropdown.Item href="/gallery-1">
                  Hotel Exterior
                </NavDropdown.Item>
                <NavDropdown.Item href="/gallery-2">
                  Hotel Interior
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Stack>
    </Container>
  );
};

export default NavbarMain;
