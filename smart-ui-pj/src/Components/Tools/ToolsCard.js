import React, { useEffect, useState } from "react";
import {
  ToolsCardBox,
  ToolsCadTitle,
  ToolsCardText,
  ToolsIconWrap,
  ToolsCardTextWrap,
} from "./ToolsElements";

const ToolsCard = ({ icon, title, text, alt }) => {
  const [ToolsCardHover, ToolsCardSetHover] = useState(false);

  useEffect(() => {
    ToolsCardSetHover(ToolsCardHover);
  }, [ToolsCardHover]);

  return (
    <ToolsCardBox
      onMouseEnter={() => ToolsCardSetHover(true)}
      onMouseLeave={() => ToolsCardSetHover(false)}
      hover={ToolsCardHover}
    >
      <ToolsIconWrap>
        <img src={icon} alt={alt} />
      </ToolsIconWrap>
      <ToolsCardTextWrap>
        <ToolsCadTitle>{title}</ToolsCadTitle>
        <ToolsCardText>{text}</ToolsCardText>
      </ToolsCardTextWrap>
    </ToolsCardBox>
  );
};

export default ToolsCard;
