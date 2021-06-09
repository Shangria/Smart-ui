import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {CgClose} from 'react-icons/cg';
import {variables} from "../../Variables";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: ${variables.mainBg};
  display: flex;
  align-items: center;
  left: 0;
  transition: .3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(CgClose)`
  color: ${variables.menuColor};
`;

export const Icon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  font-size: 35px;
  cursor: pointer;
`;

export const SidebarWrapper = styled.nav`
  color: ${variables.menuColor};
  width: 100%;
  align-self: flex-start;
  padding-top: 50px;

`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SidebarLinkWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s ease-in-out;
  cursor: pointer;
  padding: 20px;
  font-size: 30px;
`
export const SidebarLink = styled(LinkScroll)`
  color: ${variables.menuColor};

  &:hover {
    color: ${variables.accentColor};
    transition: .2s ease-in-out;
  }
`;

export const SidebarLinkToPortfolio=styled(LinkR)`
  color: ${variables.menuColor};
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 80px;
`;

export const SidebarBtn = styled(LinkScroll)`
  padding: 12px 18px;
  color: ${variables.mainBg};
  background-color: ${variables.btColor};
  border-radius: 3px;
  transition: .3s background;
  font-size: 30px;

  &:hover {
    background: ${variables.accentColor};
    color: #fff;
    border: 1px solid #fff;
    box-shadow: 4px 4px 10px rgb(170 170 170 / 80%);
  }
`;