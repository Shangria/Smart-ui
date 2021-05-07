import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import {variables} from "../../Variables";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: ${() => variables.mainBg};
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${() => variables.menuColor};
`;

export const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  font-size: 30px;
  cursor: pointer;
`;

export const SidebarWrapper = styled.nav`
  color: ${() => variables.menuColor};
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
  
  &:hover {
    color: olive;
    transition: .2s ease-in-out;
  }
`
export const SidebarLink = styled(LinkScroll)`
  color: ${() => variables.menuColor};
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtn = styled(LinkR)`
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
`;