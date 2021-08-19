import styled from 'styled-components/macro';
import {variables} from "../../Variables";
import {heroData} from './HeroData';

export const HeroContainer = styled.section`
  background-image: url(${heroData.bg2}), url(${heroData.bg1}), url(${heroData.bg3});
  background-repeat: no-repeat;
  background-position: 100% 92px, 100% 0, 0 80%;
  background-size: 55%, 50%, 160px;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: -120px;

  @media (max-width: ${variables.desktopMin}) {
    background-size: 80%, 50%, 0%;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1310px;
  width: 100%;
  padding: 65px 15px 0;
  padding-bottom: 30%;
  z-index: 1;
  @media (max-width: ${variables.desktopMin}) {
    flex-direction: column;
    padding: 220px 15px 0;
  }
`;


export const HeroTitleContainer = styled.div`
  transform: translate(0, 30%);
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  mix-blend-mode: multiply;
  @media (max-width: ${variables.wideScreenMin}) {
    flex-basis: 45%;
  };

  @media (max-width: ${variables.desktopMin}) {
    transform: none;
    top: 80px;
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
  align-self: flex-start;
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
  align-items: center;
  margin-right: 30px;
  padding: 10px 35px;
  border-radius: 6px;
  border: 1px solid #F2F2F2;
  box-shadow: 4px 4px 10px rgba(170, 170, 170, 0.13);
  background-color: #ffffff;

  @media (max-width: ${variables.mobileMin}) {
    margin-bottom: 20px;
  };
`;

export const HeroSocialMediaText = styled.p`
  padding-bottom: 15px;
`;

export const HeroSocialIcons = styled.div`
  display: flex;

  @media (max-width: ${variables.mobileMin}) {
    flex-direction: column;
  };
`;

export const HeroSocialName = styled.p`
  margin-left: 12px;
  font-size: 16px;
  @media (min-width: ${variables.wideScreenMin}) {
    font-size: 22px;
  };
`;


export const HeroImagesContainer = styled.div`
  @media (max-width: ${variables.desktopMin}) {
    display: flex;
    flex-direction: row;
  };

`;
export const HeroImgWrapUp = styled.div`
  @media (min-width: ${variables.desktopMin}) {
    position: absolute;
    top: 70px;
    right: 145px;
  };
`;
export const HeroImgWrapDown = styled.div`


  @media (min-width: ${variables.desktopMin}) {
    position: absolute;
    top: 396px;
    right: 180px;
  };
`;



