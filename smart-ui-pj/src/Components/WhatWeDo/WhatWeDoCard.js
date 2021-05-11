import React, {useState, useEffect} from "react";
import {
    WhatWeDoCardBox,
    WhatWeDoCardIcon,
    WhatWeDoCardText,
    WhatWeDoCardTitle,
} from "./WhatWeDoElements";


const WhatWeDoCard = ({
                          cardIcon,
                          cardTitle,
                          cardText,
                          icon

                      }) => {
    const [hover, setHover] = useState(false);

    useEffect(() => {
        setHover(hover);
    }, []);

    return (
        <WhatWeDoCardBox onMouseEnter={() => setHover(true)}
                         onMouseLeave={() => setHover(false)}
                         hover={hover}
        >
            <WhatWeDoCardIcon hover={hover}
            >
                <>{icon}</>
            </WhatWeDoCardIcon>
            <WhatWeDoCardTitle>{cardTitle}</WhatWeDoCardTitle>
            <WhatWeDoCardText>{cardText}</WhatWeDoCardText>
        </WhatWeDoCardBox>
    );
};

export default WhatWeDoCard;