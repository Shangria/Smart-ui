import React from "react";
import {
    WhatWeDoCardBox,
    WhatWeDoCardIcon,
    WhatWeDoCardText,
    WhatWeDoCardTitle,
} from "./WhatWeDoElements";

const WhatWeDoCard = ({
                          cardIcon,
                          cardTitle,
                          cardText
                      }) => {
    return (
        <WhatWeDoCardBox>
            <WhatWeDoCardIcon>
                <img src={cardIcon} alt="icon"/>
            </WhatWeDoCardIcon>
            <WhatWeDoCardTitle>{cardTitle}</WhatWeDoCardTitle>
            <WhatWeDoCardText>{cardText}</WhatWeDoCardText>
        </WhatWeDoCardBox>
    );
};

export default WhatWeDoCard;