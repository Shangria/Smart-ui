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
  gap: 1rem;
  flex-wrap: wrap;
  padding-left: 0;
  @media (max-width: ${variables.desktopMin}) {
    flex-wrap: wrap;
  }
`;

export const WhatWeDoCardBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 100%;
  border: 1px solid ${variables.placeholderFont};
  border-radius: 8px;
  padding: 25px;
  background: ${variables.mainBg};
  transition: background .4s, box-shadow .5s;

@media (min-width: ${variables.tabletMin}) {
  flex: 1 1 calc((100% / 2) - 1rem);
}

@media (min-width: ${variables.wideScreenMin}) {
  flex: 1 1 calc((100% / 4) - 1rem);
}

  &:hover {
    background: ${variables.accentColor};
    box-shadow: 0px 5px 30px ${variables.placeholderFont};

    .hovering {
      background: ${variables.mainBg};
    }
    img {
      filter: invert(40%) sepia(13%) saturate(3138%) hue-rotate(119deg) brightness(95%) contrast(123%);
    }
  }
`;

export const WhatWeDoCardIcon = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 100px;
  padding: 30px;
  background-color: ${variables.accentColor};
  border-radius: 25px;
  box-shadow: 0px 5px 30px rgba(0, 217, 166, 0.25);
  transition: background-color .3s;
  display: flex;
  justify-content: center;

  img {
    transition: filter .3s;
  }
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



