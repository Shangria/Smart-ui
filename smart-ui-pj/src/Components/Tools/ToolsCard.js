import React from "react";
import {
  ToolsCardBox,
  ToolsCadTitle,
  ToolsCardText,
  ToolsIconWrap,
  ToolsCardTextWrap,
} from "./ToolsElements";

const ToolsCard = ({ icon, title, text, alt }) => {

  return (
    <ToolsCardBox>
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
