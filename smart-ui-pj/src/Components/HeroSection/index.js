import React from "react";
import { Button } from "../ButtonElement";
import { variables } from "../../Variables";
import {
  HeroContainer,
  HeroBtnWrapper,
  HeroContent,
  HeroSubTitle,
  HeroTitle,
  HeroTitleContainer,
  HeroTitleSmart,
  HeroImagesContainer,
  HeroImgWrapUp,
  HeroImgWrapDown,
  HeroSocialIcons,
  HeroSocialMedia,
  HeroSocialMediaText,
} from "./HeroElements";
import { heroData } from "./HeroData";
import HeroImg from "./HeroImg";
import SocialLink from './SocialLink';

const HeroSection = () => {

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroTitleContainer>
          <HeroTitle>
            We are
            <HeroTitleSmart> SMART-UI </HeroTitleSmart>
            agency
          </HeroTitle>
          <HeroSubTitle>
            You deserve easy IT, to make it easy{"\n"} make it SMART
          </HeroSubTitle>
          <HeroBtnWrapper>
            <Button
              to="whatWeDo"
              offset={-80}
              padding="25px 70px"
              background={variables.accentColor}
              backgroundhover={variables.mainBg}
              colorhover={variables.accentColor}
            >
              Find more
            </Button>
          </HeroBtnWrapper>

          <HeroSocialMedia>
            <HeroSocialMediaText>Our social media:</HeroSocialMediaText>
            <HeroSocialIcons>
							<SocialLink href='https://www.upwork.com/o/companies/~01e25310f9dbd13dbb/' upwork text={'UpWork'} icon={heroData.upWork}/>
							<SocialLink href='https://www.linkedin.com/in/smart-ui-company/' text={'LinkedIn'} icon={heroData.linkedIn}/>
            </HeroSocialIcons>
          </HeroSocialMedia>
        </HeroTitleContainer>

        <HeroImagesContainer>
          <HeroImgWrapUp>
            <HeroImg img={heroData.phone2} />
          </HeroImgWrapUp>
          <HeroImgWrapDown>
            <HeroImg img={heroData.phone1} />
          </HeroImgWrapDown>
        </HeroImagesContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
