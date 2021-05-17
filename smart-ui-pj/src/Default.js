import {createGlobalStyle} from 'styled-components';
import {variables} from "./Variables";

export const DefaultStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${variables.mainFont};
    font-size: 14px;
    font-weight: 400;
    color: ${variables.fontColor};
    @media screen and(min-width: ${variables.tabletMin} ) {
      font-size: 16px;
    }
  }
  
  img {
    display: block;
    max-width: 100%;
    height: 100%;
  }

  a {
    display: inline-block;
    color: ${variables.fontColor};
  }

  h3 {
    font-weight: 500;
    font-size: 18px;
    @media screen and(min-width: ${variables.mobileMin}) {
      font-size: 22px;
    }
    @media screen and(min-width: ${variables.desktopMin}) {
      padding-bottom: 6px;
    }
  }
`;