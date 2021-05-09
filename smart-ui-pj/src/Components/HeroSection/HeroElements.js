import styled from 'styled-components';
import {variables} from "../../Variables";
import {heroDataImg} from './HeroData';

export const HeroContainer = styled.section`
  position: relative;
  z-index: 1;
  top: -100px
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  background-image: url(${heroDataImg.bg2}), url(${heroDataImg.bg1});
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: 50%;
  mix-blend-mode: multiply;
}`
export const HeroEl = styled.div`
  @media screen and (min-width: ${variables.wideScreenXl}) {
    display: block;
    position: absolute;
    background-image: url(${heroDataImg.bg3});
    background-repeat: no-repeat;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 30%;
    left: 0;
  }
`;