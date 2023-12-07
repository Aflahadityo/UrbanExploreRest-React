import styled from "styled-components";
import { Navbar, Nav, Button } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background-color: #d9d9d9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledNav = styled(Nav)`
  a {
    color: #d83d3d;
    font-weight: bold;
    &:hover {
      color: #d9d9d9;
      background-color: #d83d3d;
    }
  }
`;

export const StyledBrand = styled(Navbar.Brand)`
  color: #d83d3d;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: #d9d9d9;
    background-color: #d83d3d;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #d83d3d;
  border-color: #d83d3d;
  color: #d9d9d9;
  font-weight: bold;
  &:hover {
    background-color: #d9d9d9;
    border-color: #d83d3d;
    color: #d83d3d;
  }
`;
