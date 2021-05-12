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

    const [hover, setHover] = useState(false);

    useEffect(() => {
        setHover(hover);
    }, []);

    return (
        <WhatWeDoCardBox onMouseEnter={() => setHover(true)}
                         onMouseLeave={() => setHover(false)}
                         hover={hover}>
            <WhatWeDoCardIcon hover={hover}>
                <img style={ hover ? {filter: "invert(40%) sepia(13%) saturate(3138%) hue-rotate(119deg) brightness(95%) contrast(123%)"} : {color:`${variables.accentColor}`}}
                    src={icon} alt={altWhatWeDo}/>
            </WhatWeDoCardIcon>
            <WhatWeDoCardTitle>{cardTitle}</WhatWeDoCardTitle>
            <WhatWeDoCardText>{cardText}</WhatWeDoCardText>
        </WhatWeDoCardBox>
    );
};

export default WhatWeDoCard;