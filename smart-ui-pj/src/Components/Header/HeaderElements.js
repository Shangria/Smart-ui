import styled from 'styled-components';
import {variables} from "../../Variables";
import {Link as LinkLogo} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const NavHeader = styled.header`
  background-color: olivedrab;
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;
export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 15px;
  max-width: 1310px;
`;
export const NavLogoContainer = styled(LinkLogo)`
  padding: 0 15px;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 30px;
    cursor: pointer;
    color: black;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: ${() => variables.tabletMin}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;


  @media screen and (max-width: ${() => variables.tabletMin}) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkLogo)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 1px 0px 8px 0px rgba(11, 11, 11, 0.58);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`


