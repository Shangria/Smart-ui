import styled from 'styled-components';
import {variables} from "../../Variables";
import {heroData} from './HeroData';

export const HeroContainer = styled.section`
  min-height: 100vh;
  background-image: url(${heroData.bg2}), url(${heroData.bg1}), url(${heroData.bg3});
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: 50%, 50%, 80%;
  mix-blend-mode: multiply;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: -120px;
  margin-bottom: 100px;

  @media (max-width: ${variables.desktopMin}) {
    background-size: 80%;
  }
`;

export const HeroTriangle = styled.div`
  @media (min-width: ${variables.wideScreenXl}) {
    display: block;
    position: absolute;
    background-image: url(${heroData.bg3});
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
  max-width: 1310px;
  width: 100%;
  padding: 65px 15px 0;
  @media (max-width: ${variables.desktopMin}) {
    flex-direction: column;
  }
`;


export const HeroTitleContainer = styled.div`
  transform: translate(0, 50%);
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
    padding: 15px;
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



