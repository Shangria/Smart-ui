import styled from "styled-components";
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

export const ReviewsSliderContainer=styled.div`
display: flex`;