import { Nav, Stack } from "react-bootstrap";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
const Topbar = () => {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      style={{ backgroundColor: "#D9D9D9" }}
      className="px-4 py-2"
    >
      <Stack direction="horizontal" gap={5}>
        <Stack direction="horizontal" gap={2}>
          <MdPhoneInTalk />
          <Nav.Link href="https://wa.link/g8ggqx" target="_blank">
            021-319-2023
          </Nav.Link>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          <MdEmail />
          <Nav.Link href="mailto:urbanexplorerest@gmail.com">
            urbanexplorerest@gmail.com
          </Nav.Link>
        </Stack>
      </Stack>
      <Nav className="justify-content-center ms-auto" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/cart" className="text-black">
            Cart
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/register" className="text-black">
            Sign Up
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login" className="text-black">
            Sign In
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Stack>
  );
};

export default Topbar;
