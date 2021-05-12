import React from "react";
import {
    WhatWeDoCardContainer,
    WhatWeDoContainer,
    WhatWeDoContainerContent,
    WhatWeDoText,
    WhatWeDoTitle,
    WhatWeDoTextWrap
} from "./WhatWeDoElements";
import WhatWeDoCard from "./WhatWeDoCard";
import {
    whatWeDoDataCard1,
    whatWeDoDataCard2,
    whatWeDoDataCard3,
    whatWeDoDataCard4,
} from '../WhatWeDo/WhatWeDoData';

const WhatWeDo = () => {
    return (
        <WhatWeDoContainer id="whatWeDo">
            <WhatWeDoContainerContent>
                <WhatWeDoTextWrap>
                    <WhatWeDoTitle>What we do</WhatWeDoTitle>
                    <WhatWeDoText>By implementing modern Internet technologies, we help our Clients to achieve their goals
                        and solve problems effectively, striving to do it better than competitors do, and offering optimal
                        effective solutions
                        taking into account the interests of each Client, with sincere care and maximum possible
                        attention.</WhatWeDoText>
                </WhatWeDoTextWrap>
                <WhatWeDoCardContainer>
                    <WhatWeDoCard {...whatWeDoDataCard1}/>
                    <WhatWeDoCard {...whatWeDoDataCard2}/>
                    <WhatWeDoCard {...whatWeDoDataCard3}/>
                    <WhatWeDoCard {...whatWeDoDataCard4}/>
                </WhatWeDoCardContainer>
            </WhatWeDoContainerContent>
        </WhatWeDoContainer>
    );
};

export default WhatWeDo;