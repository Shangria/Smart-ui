import React from "react";
import {ButtonSend} from '../ButtonElement';
import {variables} from "../../Variables";
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
    HeroSocialName,
    HeroSocialLink,
} from "./HeroElements";
import {heroData} from "./HeroData";
import HeroImg from './HeroImg';
import HeroSocialIcon from "./HeroSocialIcon";


const HeroSection = () => {
    return (
        <HeroContainer id="home">
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
                        <ButtonSend
                            type='submit'
                            to='findMore'
                            padding='25px 70px'
                            background={variables.accentColor}
                            backgroundhover={variables.mainBg}
                            colorhover={variables.accentColor}
                        >
                            Find more</ButtonSend>
                    </HeroBtnWrapper>
                    <HeroSocialMedia>
                        <HeroSocialMediaText>Our social media:</HeroSocialMediaText>
                        <HeroSocialIcons>
                            <HeroSocialLink href='#'>
                                <HeroSocialIcon icon={heroData.upWork}>
                                </HeroSocialIcon>
                                <HeroSocialName>UpWork</HeroSocialName>
                            </HeroSocialLink>
                            <HeroSocialLink href='#'>
                                <HeroSocialIcon icon={heroData.linkedIn}>
                                </HeroSocialIcon>
                                <HeroSocialName>LinkedIn</HeroSocialName>
                            </HeroSocialLink>
                        </HeroSocialIcons>
                    </HeroSocialMedia>
                </HeroTitleContainer>
                <HeroImagesContainer>
                    <HeroImgWrapUp>
                        <HeroImg img={heroData.phone2}/>
                    </HeroImgWrapUp>
                    <HeroImgWrapDown>
                        <HeroImg img={heroData.phone1}/>
                    </HeroImgWrapDown>
                </HeroImagesContainer>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;