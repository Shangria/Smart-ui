import styled from 'styled-components';
import {toolsDataBg} from '../Tools/ToolsData';
import {variables} from "../../Variables";

export const ToolsContainer = styled.section`
  background-image: url(${toolsDataBg.bg});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  display: flex;
  padding: 100px 0;
`;

export const ToolsContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1310px;
  padding: 0 15px;
  width: 100%;
`;

export const ToolsTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const ToolsTitle = styled.h3`
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 10px;

  @media (max-width: ${variables.tabletMin}) {
    font-size: 32px;
  };
`;

export const ToolsText = styled.p`
  max-width: 550px;
  width: 100%;
`;

export const ToolsCardWrapper = styled.ul`
  display: flex;
  justify-content: center;
  @media (max-width: ${variables.desktopMin}) {
    flex-wrap: wrap;
  };
`;

export const ToolsCardBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #E3E3E3;
  border-radius: 8px;
  margin: 5px 5px;
  transition: .3s background;
  background: ${({hover}) => (hover ? `${variables.mainBg}` : '')};
  width: 20%;
  padding: 45px 0;

  @media (max-width: ${variables.desktopMin}) {
    width: 45%;
    padding-bottom: 20px;
  };
  @media (max-width: ${variables.mobileMin}) {
    width: 100%;
  };
`;

export const ToolsCardTextWrap=styled.div`
  text-align: center;
`;

export const ToolsIconWrap = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 25px;
  font-size: 100px;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0px 5px 30px rgba(0, 217, 166, 0.25);
  transition: .3s background;
  display: flex;
  justify-content: center;
`;

export const ToolsCadTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  padding-bottom: 6px;
  text-align: center;
`;

export const ToolsCardText = styled.p`
  @media (max-width: ${variables.desktopMin}) {
    text-align: center;
  };
`;

