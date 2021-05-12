import styled from 'styled-components';
import {variables} from "../../Variables";

export const WhatWeDoContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const WhatWeDoContainerContent = styled.div`
  display: flex;
  max-width: 1310px;
  padding: 0 15px;
  flex-direction: column;
  width: 100%;
`;

export const WhatWeDoTextWrap = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const WhatWeDoTitle = styled.h3`
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 10px;

  @media (max-width: ${variables.tabletMin}) {
    font-size: 32px;
  };
`;

export const WhatWeDoText = styled.p`
  max-width: 550px;
  width: 100%;
`;

export const WhatWeDoCardContainer = styled.ul`
  display: flex;
  justify-content: center;
  @media (max-width: ${variables.desktopMin}) {
    flex-wrap: wrap;
  }
`;

export const WhatWeDoCardBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #E3E3E3;
  border-radius: 8px;
  padding: 25px;
  margin: 5px 5px;
  transition: .3s background;
  background: ${({hover}) => (hover ? `${variables.accentColor}` : `${variables.mainBg}`)};
  
  @media (max-width: ${variables.desktopMin}) {
    width: 45%;
    padding-bottom: 20px;
  };
  
  @media (max-width: ${variables.mobileMin}) {
    width: 100%;
  }
`;

export const WhatWeDoCardIcon = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 100px;
  padding: 30px;
  background: ${({hover}) => (hover ? `${variables.mainBg}` : `${variables.accentColor}`)};
  border-radius: 25px;
  box-shadow: 0px 5px 30px rgba(0, 217, 166, 0.25);
  transition: .3s background;
  display: flex;
  justify-content: center;
`;

export const WhatWeDoCardTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  padding-bottom: 6px;
  text-align: center;
`;

export const WhatWeDoCardText = styled.p`
  @media (max-width: ${variables.desktopMin}) {
    text-align: center;
  }
`;



