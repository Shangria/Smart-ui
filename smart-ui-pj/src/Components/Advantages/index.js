import React from "react";
import {
    AdvantagesContainer,
    AdvantagesContentWrap,
    AdvantagesText,
    AdvantagesTextWrap,
    AdvantagesTitle,
    AdvantagesCardWrapper,
} from "./AdvantagesElements";
import AdvantagesCard from "./AdvantagesCard";
import {
    advantagesCard1,
    advantagesCard2,
    advantagesCard3,
} from "./AdvantagesData";


const Advantages = () => {
    return (
        <AdvantagesContainer id='ourAdvantages'>
            <AdvantagesContentWrap>
                <AdvantagesTextWrap>
                    <AdvantagesTitle>Our advantages</AdvantagesTitle>
                    <AdvantagesText>We help to develop business, using complex modern effective it solutions,
                        tools of web development and Internet marketing.</AdvantagesText>
                </AdvantagesTextWrap>
                <AdvantagesCardWrapper>
                    <AdvantagesCard {...advantagesCard1}/>
                    <AdvantagesCard {...advantagesCard2}/>
                    <AdvantagesCard {...advantagesCard3}/>
                </AdvantagesCardWrapper>
            </AdvantagesContentWrap>
        </AdvantagesContainer>
    );
};
export default Advantages;