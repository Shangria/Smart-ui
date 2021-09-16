import React from "react";
import {
  WhatWeDoCardBox,
  WhatWeDoCardIcon,
  WhatWeDoCardText,
  WhatWeDoCardTitle,
} from "./WhatWeDoElements";

const WhatWeDoCard = ({ cardTitle, cardText, icon, altWhatWeDo }) => {

  return (
    <WhatWeDoCardBox>
      <WhatWeDoCardIcon className="hovering">
        <img src={icon} alt={altWhatWeDo} />
      </WhatWeDoCardIcon>
      <WhatWeDoCardTitle>{cardTitle}</WhatWeDoCardTitle>
      <WhatWeDoCardText>{cardText}</WhatWeDoCardText>
    </WhatWeDoCardBox>
  );
};

export default WhatWeDoCard;
