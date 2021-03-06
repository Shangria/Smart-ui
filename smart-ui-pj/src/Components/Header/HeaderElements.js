import styled from 'styled-components';
import {variables} from "../../Variables";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const NavHeader = styled.header`
  background-color:  ${({scrollNav})=>(scrollNav? 'white':'transparent')} ;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: background-color ease-out .5s;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1310px;
  justify-content: space-between;
  padding: 20px 15px 0 ;
`;

export const NavLogoContainer = styled(LinkScroll)`
  cursor: pointer;
  
  @media screen and (max-width: ${variables.mobileMin}) {
   width: 150px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${variables.desktopMin}) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 35px;
    cursor: pointer;
    color: ${variables.menuColor};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${variables.desktopMin}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  color: ${variables.menuColor};
  padding: 0 25px;
`;

export const NavLinks = styled(LinkScroll)`
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${variables.accentColor};
  }
`;

export const NavLinkToPortfolio=styled(LinkR)`
  cursor: pointer;
`;

export const NavBtnLink = styled(LinkScroll)`
  padding: 12px 18px;
  color: ${variables.mainBg};
  background-color: ${variables.btColor};
  border-radius: 3px;
  transition: .3s background;
  border: 1px solid #000000;
  cursor: pointer;

  &:hover {
    background: ${variables.accentColor};
    color: #fff;
    border: 1px solid #fff;
    box-shadow: 4px 4px 10px rgb(170 170 170 / 80%);
  }
}
`


