import React from "react";
import {
    ToolsContainer,
    ToolsCardWrapper,
    ToolsContentWrap,
    ToolsText,
    ToolsTitle,
    ToolsTextWrap,
} from "./ToolsElements";
import ToolsCard from "./ToolsCard";
import {
    toolsDataCard1,
    toolsDataCard2,
    toolsDataCard3,
    toolsDataCard4,
} from "./ToolsData";

const Tools = () => {
    return (
        <ToolsContainer>
            <ToolsContentWrap>
                <ToolsTextWrap>
                    <ToolsTitle>Tools we use</ToolsTitle>
                    <ToolsText>What makes our work, work.</ToolsText>
                </ToolsTextWrap>
                <ToolsCardWrapper>
                    <ToolsCard {...toolsDataCard1}/>
                    <ToolsCard {...toolsDataCard2}/>
                    <ToolsCard {...toolsDataCard3}/>
                    <ToolsCard {...toolsDataCard4}/>
                </ToolsCardWrapper>
            </ToolsContentWrap>
        </ToolsContainer>
    );
};
export default Tools;