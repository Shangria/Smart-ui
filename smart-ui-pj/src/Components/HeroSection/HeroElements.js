import styled from 'styled-components';
import {variables} from "../../Variables";
import {heroDataImg} from './HeroData';

export const HeroContainer = styled.section`
  position: relative;
  z-index: 1;
  top: -115px;
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

  @media (max-width: ${variables.desktopMin}) {
    background-size: 80%;
  }
}`;

export const HeroTriangle = styled.div`
  @media (min-width: ${variables.wideScreenXl}) {
    display: block;
    position: absolute;
    background-image: url(${heroDataImg.bg3});
    background-repeat: no-repeat;
    background-size: 15%;
    z-index: 0;
    width: 80%;
    height: 100%;
    top: 35%;
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
  padding-top: 60px;
  @media screen and (max-width: ${variables.desktopMin}) {
    flex-direction: column;
  }
`;


export const HeroTitleContainer = styled.div`
  transform: translate(25%, 50%);
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  mix-blend-mode: multiply;
  position: relative;
  top: -155px;


  @media (max-width: ${variables.desktopMin}) {
    transform: none;
    top: 80px;
    align-self: end;
    padding-left: 15px;
  };
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 60px;
  padding-bottom: 15px;
  line-height: 1.1;

  @media (max-width: ${variables.desktopMin}) {
    font-size: 55px;
  };

  @media (max-width: ${variables.tabletMin}) {
    font-size: 38px;
  };
`;

export const HeroTitleSmart = styled.span`
  color: ${variables.accentColor};
`;

export const HeroSubTitle = styled.p`
  max-width: 600px;
  font-weight: 500;
  font-size: 36px;
  padding-bottom: 60px;

  @media (max-width: ${variables.desktopMin}) {
    font-size: 22px;
  }
`;

export const HeroBtnWrapper = styled.div`
  padding-bottom: 30px;
  @media (max-width: ${variables.tabletMin}) {
    padding-bottom: 80px;
  };
  @media (max-width: ${variables.mobileMin}) {
    padding-bottom: 40px;
  };
`;

export const HeroSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  @media (max-width: ${variables.mobileMin}) {
    padding-top: 0;
  };
`;

export const HeroSocialLink = styled.a`
  display: flex;
  padding-right: 80px;
  
  @media (max-width: ${variables.mobileMin}) {
    padding-bottom: 20px;
  };
`;

export const HeroSocialMediaText = styled.p`
  padding-bottom: 15px;
`;

export const HeroSocialIcons = styled.div`
  display: flex;
  padding-left: 20px;
  
  @media (max-width: ${variables.mobileMin}) {
   flex-direction: column;
  };
`;

export const HeroSocialName = styled.p`
  font-size: 16px;
  padding-left: 15px;
`;


export const HeroImagesContainer = styled.div`
  display: flex;
  padding-top: 85px;
  
  @media (max-width: ${variables.desktopMin}) {
    padding-top: 90px;
    padding-left: 50px;
    flex-flow: row-reverse;
  };

`;
export const HeroImgWrapUp = styled.div`
  position: relative;
  bottom: -243px;
  right: -310px;

  @media (max-width: ${variables.desktopMin}) {
    position: relative;
    bottom: -10px;
    left: -100px;
  };
`;
export const HeroImgWrapDown = styled.div`
  position: relative;
  top: -65px;
  right: 90px;
  
  @media (max-width: ${variables.desktopMin}) {
    position: static;
  };
`;




