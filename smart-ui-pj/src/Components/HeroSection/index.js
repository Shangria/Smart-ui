import React from "react";
import {Button} from '../ButtonElement';
import {variables} from "../../Variables";
import {
    HeroContainer,
    HeroBg,
    HeroTriangle,
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
    HeroSocialName,
    HeroSocialLink,
} from "./HeroElements";
import {heroDataImg} from "./HeroData";
import HeroImg from './HeroImg';
import HeroSocialIcon from "./HeroSocialIcon";


const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <HeroTriangle/>
            </HeroBg>
            <HeroContent>
                <HeroTitleContainer>
                    <HeroTitle>We are
                        <HeroTitleSmart>
                            {' '}SMART-UI{' '}
                        </HeroTitleSmart>
                        agency
                    </HeroTitle>
                    <HeroSubTitle>You deserve easy IT, to make it easy{'\n'} make it SMART</HeroSubTitle>
                    <HeroBtnWrapper>
                        <Button
                            to='findMore'
                            padding='25px 70px'
                            background={variables.accentColor}
                            backgroundhover={variables.mainBg}
                            colorhover={variables.accentColor}
                        >
                            Find more</Button>
                    </HeroBtnWrapper>
                    <HeroSocialMedia>
                        <HeroSocialMediaText>Our social media:</HeroSocialMediaText>
                        <HeroSocialIcons>
                            <HeroSocialLink href='#'>
                                <HeroSocialIcon icon={heroDataImg.upWork}>
                                </HeroSocialIcon>
                                <HeroSocialName>UpWork</HeroSocialName>
                            </HeroSocialLink>
                            <HeroSocialLink href='#'>
                                <HeroSocialIcon icon={heroDataImg.linkedIn}>
                                </HeroSocialIcon>
                                <HeroSocialName>LinkedIn</HeroSocialName>
                            </HeroSocialLink>
                        </HeroSocialIcons>
                    </HeroSocialMedia>
                </HeroTitleContainer>
                <HeroImagesContainer>
                    <HeroImgWrapUp>
                        <HeroImg img={heroDataImg.phone2}/>
                    </HeroImgWrapUp>
                    <HeroImgWrapDown>
                        <HeroImg img={heroDataImg.phone1}/>
                    </HeroImgWrapDown>
                </HeroImagesContainer>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;