import styled from "styled-components/macro";
import {variables} from "../../Variables";

export const ReviewsContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const ReviewsContentWrap = styled.div`
  display: flex;
  max-width: 1310px;
  padding: 0 15px;
  flex-direction: column;
  width: 100%;
`;

export const ReviewsTextWrap = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const ReviewsTitle = styled.h3`
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 10px;

  @media (max-width: ${variables.tabletMin}) {
    font-size: 32px;
  };
`;

export const ReviewsText = styled.p`
  max-width: 550px;
  width: 100%;
`;

export const ReviewsItemsContainer = styled.div`
  margin: 0 -20px;
  padding: 20px;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ReviewsItemBox = styled.div`
  flex: 1 1 100%;
  padding: 1rem;
  background-color: white;
  border: 1px solid ${variables.placeholderFont};
  box-shadow: 0px 5px 30px ${variables.placeholderFont};
  text-align: center;
  border-radius: 8px;

  @media (min-width: ${variables.tabletMin}) {
    flex: 1 1 calc((100% / 2) - 1rem);
  }

  @media (min-width: ${variables.wideScreenMin}) {
    flex: 1 1 calc((100% / 4) - 1rem);
  }
`;

export const ReviewsItemHead = styled.h5`
  font-size:  1.5rem;
`;

export const ReviewsItemText = styled.p`
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const IconImg = styled.img`
  width: 24px;
  height: auto;
  margin-right: 4px;

  &:last-of-type {
    margin-right: 0;
  }
`;