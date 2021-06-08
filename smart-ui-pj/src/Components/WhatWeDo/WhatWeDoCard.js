import React, {useState, useEffect} from "react";
import {
    WhatWeDoCardBox,
    WhatWeDoCardIcon,
    WhatWeDoCardText,
    WhatWeDoCardTitle,
} from "./WhatWeDoElements";
import {variables} from "../../Variables";

const WhatWeDoCard = ({
                          cardTitle,
                          cardText,
                          icon,
                          altWhatWeDo,
                      }) => {

    const [whatWeDoCardHover, WhatWeDoCardSetHover] = useState(false);

    useEffect(() => {
        WhatWeDoCardSetHover(whatWeDoCardHover);
    }, [whatWeDoCardHover]);

    return (
        <WhatWeDoCardBox onMouseEnter={() => WhatWeDoCardSetHover(true)}
                         onMouseLeave={() => WhatWeDoCardSetHover(false)}
                         hover={whatWeDoCardHover}>
            <WhatWeDoCardIcon hover={whatWeDoCardHover}>
                <img style={ whatWeDoCardHover ? {filter: "invert(40%) sepia(13%) saturate(3138%) hue-rotate(119deg) brightness(95%) contrast(123%)"} : {color:`${variables.accentColor}`}}
                    src={icon} alt={altWhatWeDo}/>
            </WhatWeDoCardIcon>
            <WhatWeDoCardTitle>{cardTitle}</WhatWeDoCardTitle>
            <WhatWeDoCardText>{cardText}</WhatWeDoCardText>
        </WhatWeDoCardBox>
    );
};

export default WhatWeDoCard;