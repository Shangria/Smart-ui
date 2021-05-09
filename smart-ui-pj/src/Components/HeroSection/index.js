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
} from "./HeroElements";
import {heroDataImg} from "./HeroData";
import HeroImg from './HeroImg';


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
                            SMART-UI
                        </HeroTitleSmart>
                        agency
                    </HeroTitle>
                    <HeroSubTitle>You deserve easy IT, to make it easy make it SMART</HeroSubTitle>
                    <HeroBtnWrapper>
                        <Button
                            to='findMore'
                            background={variables.accentColor}
                            backgroundhover={variables.mainBg}
                            colorhover={variables.accentColor}
                        >
                            Find more</Button>
                    </HeroBtnWrapper>
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