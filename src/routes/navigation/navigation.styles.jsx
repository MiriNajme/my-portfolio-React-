import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 60px;
  width: 100%;
  padding: 0 100px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  // margin-bottom: 25px;
  background-color: var(--secondary-color);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 15px;
  font-size: 20px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #0000008c;
`;




