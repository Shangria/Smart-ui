import styled from 'styled-components';
import {Link} from 'react-scroll';
import {variables} from "../Variables";

export const Button = styled(Link)`
  padding: ${prop => prop.padding};
  color: ${variables.mainBg};
  background-color: ${prop => prop.background};
  border-radius: 3px;
  transition: .3s background;
  cursor: pointer;

  &:hover {
    background-color: ${prop => prop.backgroundhover};
    color: ${prop => prop.colorhover};
    border: 1px solid #fff;
    box-shadow: 4px 4px 10px rgb(170 170 170 / 80%);
  }
`;