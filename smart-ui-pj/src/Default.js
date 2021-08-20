import {createGlobalStyle} from 'styled-components/macro';
import {variables} from "./Variables";

export const DefaultStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${variables.mainFont};
    font-size: ${variables.fontSize};
    font-weight: 400;
    color: ${variables.fontColor};
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    display: inline-block;
    color: ${variables.fontColor};
  }

  h3 {
    font-weight: 500;
    font-size: 1.125rem;
    @media screen and(min-width: ${variables.mobileMin}) {
      font-size: 1.375rem;
    }
    @media screen and(min-width: ${variables.desktopMin}) {
      padding-bottom: 6px;
    }
  }

  .glide__bullet--active {
    background-color: #148E72 !important;
  }
`;