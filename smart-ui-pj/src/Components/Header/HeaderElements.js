import styled from 'styled-components';
import {variables} from "../../Variables";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const NavHeader = styled.header`
//  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1310px;
  justify-content: space-between;
  padding: 0 15px 0 15px;
`;

export const NavLogoContainer = styled(LinkR)`
  cursor: pointer;
  
  @media screen and (max-width: ${() => variables.mobileMin}) {
   width: 150px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${() => variables.desktopMin}) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 35px;
    cursor: pointer;
    color: ${() => variables.menuColor};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${() => variables.desktopMin}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  color: ${() => variables.menuColor};
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 50px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${() => variables.accentColor};
  }
`;

export const NavBtn = styled.div`
  padding-left: 50px;

  @media screen and (max-width: ${() => variables.tabletMin}) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  padding: 12px 18px;
  color: ${() => variables.mainBg};
  background-color: ${() => variables.btColor};
  border-radius: 3px;
  transition: .3s background;

  &:hover {
    background: ${() => variables.accentColor};
    color: #fff;
    border: 1px solid #fff;
    box-shadow: 4px 4px 10px rgb(170 170 170 / 80%);
  }
}
`


