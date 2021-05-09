import styled from 'styled-components';
import {variables} from "../../Variables";
import {heroDataImg} from './HeroData';

export const HeroContainer = styled.section`
  position: relative;
  z-index: 1;
  top: -100px;
  display: flex;
  justify-content: center;
`;

export const HeroBg = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  min-height: 100vh;
  background-image: url(${heroDataImg.bg2}), url(${heroDataImg.bg1});
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: 50%;
  mix-blend-mode: multiply;

  @media screen and (max-width: ${variables.desktopMin}) {
    background-size: 80%;
  }
}`;

export const HeroTriangle = styled.div`
  @media screen and (min-width: ${variables.wideScreenXl}) {
    display: block;
    position: absolute;
    background-image: url(${heroDataImg.bg3});
    background-repeat: no-repeat;
    background-size: 15%;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 25%;
    left: 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: center;
  align-items: center;
  max-width: calc(1310px - 15px);
  width: 100%;
`;

export const HeroTitleContainer = styled.div`
  transform: translate(25%, 50%);
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
  align-self: start;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 38px;
  padding-bottom: 15px;
  line-height: 1.1;
`;

export const HeroTitleSmart = styled.span`
  color: ${variables.accentColor};
`;

export const HeroSubTitle = styled.p`
  max-width: 600px;
  font-weight: 500;
  font-size: 22px;
  padding-bottom: 60px;
  @media screen and(max-width: ${variables.desktopMin}) {
    font-size: 36px;
  }
`;

export const HeroBtnWrapper = styled.div`
  padding-bottom: 30px;
  @media screen and(max-width: ${variables.tabletMin}) {
    padding-bottom: 80px;
  }
`;

export const HeroImagesContainer = styled.div`
  display: flex;
`;
export const HeroImgWrapUp = styled.div`
  position: absolute;
  top: 235px;
  left: 240px;
`;
export const HeroImgWrapDown = styled.div`
  position: absolute;
  top: -40px;
  left: 163px;
`;




