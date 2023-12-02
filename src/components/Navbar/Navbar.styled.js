import styled from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: #D9D9D9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const StyledNav = styled(Nav)`
  a {
    color: #D83D3D;
    font-weight: bold;
    &:hover {
      color: #D9D9D9;
      background-color: #D83D3D;
    }
  }
`;

export const StyledBrand = styled(Navbar.Brand)`
  color: #D83D3D;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: #D9D9D9;
    background-color: #D83D3D;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #D83D3D;
  border-color: #D83D3D;
  color: #D9D9D9;
  font-weight: bold;
  &:hover {
    background-color: #D9D9D9;
    border-color: #D83D3D;
    color: #D83D3D;
  }
`;
