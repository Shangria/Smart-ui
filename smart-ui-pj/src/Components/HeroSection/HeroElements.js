import styled from 'styled-components/macro';
import {variables} from "../../Variables";
import {heroData} from './HeroData';

export const HeroContainer = styled.section`
  background-image: url(${heroData.bg2}), url(${heroData.bg1}), url(${heroData.bg3});
  background-repeat: no-repeat;
  background-position: 100% 92px, 100% 0, 0 80%;
  background-size: 80%, 50%, 0%;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: -120px;

  @media (min-width: ${variables.desktopMin}) {
    background-size: 55%, 50%, 160px;
    padding-top: 120px;
  }
  @media (min-width: ${variables.wideScreenMax}) {
    background-size: 42%, 50%, 160px;
  }
`;

export const HeroContent = styled.div`
  padding: 220px 15px 0;
  display: flex;
  flex-direction: column;
  max-width: ${variables.containerWidth};
  width: 100%;
  z-index: 1;

  @media (min-width: ${variables.desktopMin}) {
    padding: 65px 15px 250px;
    flex-direction: row;
  }
`;


export const HeroTitleContainer = styled.div`
  padding: 15px;
  flex-basis: 40%;

  @media (min-width: ${variables.desktopMin}) {
    transform: translate(0, 30%);
    padding: 0;
  };
  @media (min-width: ${variables.wideScreenMin}) {
    flex-basis: 50%;
  };
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 2.25rem;
  margin-bottom: 15px;
  line-height: 1.1;

  @media (min-width: ${variables.tabletMin}) {
    font-size: 3rem;
  };
  @media (min-width: ${variables.desktopMin}) {
    font-size: 3.75rem;
  };
`;

export const HeroTitleSmart = styled.span`
  color: ${variables.accentColor};
  text-shadow: 0 0 5px black, 0 0 20px black;
  
  @media (min-width: ${variables.desktopMin}) {
    text-shadow: none;
  }
`;

export const HeroSubTitle = styled.p`
  margin-bottom: 60px;
  max-width: 600px;
  font-weight: 500;
  font-size: 1.375rem;

  @media (min-width: ${variables.desktopMin}) {
    font-size: 2.25rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: ${variables.mobileMin}) {
    margin-bottom: 40px;
    text-align: left;
  };
  @media (min-width: ${variables.tabletMin}) {
    margin-bottom: 80px;
  };
`;

export const HeroSocialMedia = styled.div`
  margin-bottom: 30px;

  @media (min-width: ${variables.desktopMin}) {
    margin-bottom: 0;
  }
`;

export const HeroSocialMediaText = styled.p`
  margin-bottom: 15px;
`;

export const HeroSocialIcons = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${variables.mobileMin}) {
    flex-direction: row;
  };
`;

export const HeroSocialLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 35px;
  font-size: ${variables.fontSize};
  border-radius: 6px;
  border: 1px solid #F2F2F2;
  box-shadow: 4px 4px 10px rgba(170, 170, 170, 0.13);
  color: ${props => props.upwork ? variables.accentColor : variables.fontColor};
  background-color: #ffffff;
  transition: box-shadow .3s;

  @media (min-width: ${variables.mobileMin}) {
    margin-bottom: 0;
    margin-right: 30px;
  };
  @media (min-width: ${variables.wideScreenMin}) {
    font-size: 1.375rem;
  };

  &:hover {
    box-shadow: 4px 4px 10px rgba(170, 170, 170, 0.73);
  }
`;

export const HeroSocialImg = styled.img`
  margin-right: 12px;
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
    top: 80px;
    right: 85px;
  };
`;
export const HeroImgWrapDown = styled.div`
  @media (min-width: ${variables.desktopMin}) {
    position: absolute;
    top: 406px;
    right: 130px;
  };
`;



