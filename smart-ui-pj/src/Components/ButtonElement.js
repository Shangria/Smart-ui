import styled from 'styled-components';
import {Link} from 'react-scroll';
import {variables} from "../Variables";

export const Button = styled(Link)`
  font-size: 1rem;
  padding: ${prop => prop.padding};
  color: ${({primarycolor}) => (primarycolor ? `${variables.accentColor}` : `${variables.mainBg}`)};
  background: ${({primarybg}) => (primarybg ? `${variables.mainBg}` : `${variables.accentColor}`)};
  border-radius: 3px;
  transition: .3s background;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  @media (min-width: ${variables.desktopMin}) {
    font-size: 1.375rem
  };

  &:hover {
    background-color: ${prop => prop.backgroundhover};
    color: ${prop => prop.colorhover};
  }
`;

export const ButtonSend = styled.button`
  align-self: flex-end;
  display: block;
  font-size: 22px;
  border: 1px solid #fff;
  padding: ${prop => prop.padding};
  color: ${({primarycolor}) => (primarycolor ? `${variables.accentColor}` : `${variables.mainBg}`)};
  background: ${({primarybg}) => (primarybg ? `${variables.mainBg}` : `${variables.accentColor}`)};
  border-radius: 3px;
  transition: .3s background;
  cursor: pointer;
  @media (max-width: ${variables.desktopMin}) {
    font-size: 16px;
  };

  &:hover {
    background-color: ${prop => prop.backgroundhover};
    color: ${prop => prop.colorhover};
    border: 1px solid #fff;
    box-shadow: 4px 4px 10px rgb(170 170 170 / 80%);
  }
`;