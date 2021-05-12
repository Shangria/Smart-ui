import React, {useEffect, useState} from "react";
import {
    ToolsCardBox,
    ToolsCadTitle,
    ToolsCardText,
    ToolsIconWrap,
    ToolsCardTextWrap,
} from "./ToolsElements";

const ToolsCard = ({
                       icon,
                       title,
                       text,
                       alt
                   }) => {

    const [hover, setHover] = useState(false);

    useEffect(() => {
        setHover(hover);
    }, []);

    return (
        <ToolsCardBox onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      hover={hover}
        >
            <ToolsIconWrap>
                <img src={icon} alt={alt}/>
            </ToolsIconWrap>
              <ToolsCardTextWrap>
                  <ToolsCadTitle>{title}</ToolsCadTitle>
                  <ToolsCardText>{text}</ToolsCardText>
              </ToolsCardTextWrap>
        </ToolsCardBox>
    );
};

export default ToolsCard;