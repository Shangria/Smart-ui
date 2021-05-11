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
import {ReactComponent as IconDesign} from '../../Images/icon/icon-design.svg';
import {ReactComponent as IconHtml} from '../../Images/icon/icon-html.svg';
import {ReactComponent as IconProgramming} from '../../Images/icon/progr.svg';
import {ReactComponent as IconSupport} from '../../Images/icon/support.svg';


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
                    <WhatWeDoCard {...whatWeDoDataCard1} icon={<IconDesign fill='red' stroke='red' stroke-width='2px'/>} />
                    <WhatWeDoCard {...whatWeDoDataCard2} icon={<IconHtml/>}/>
                    <WhatWeDoCard {...whatWeDoDataCard3} icon={<IconProgramming/>}/>
                    <WhatWeDoCard {...whatWeDoDataCard4} icon={<IconSupport/>}/>
                </WhatWeDoCardContainer>
            </WhatWeDoContainerContent>
        </WhatWeDoContainer>
    );
};

export default WhatWeDo;