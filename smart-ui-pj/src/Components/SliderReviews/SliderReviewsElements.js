import styled from 'styled-components';
import {variables} from "../../Variables";

export const SlideReviewWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  color: ${variables.secondFontColor};
  text-align: center;
  padding: 55px 0;

  @media (min-width: ${variables.mobileMax}) {
    display: flex;
    align-items: center;
    text-align: left;
  }
  @media (min-width: ${variables.desktopMin}) {
    font-size: 22px;
  }
`;

export const SlideReviewImgWrap = styled.div`
  overflow: hidden;
  border-radius: 50px;
  max-width: 100px;
  margin: 0 auto;

  @media (min-width: ${variables.mobileMax}) {
    max-width: 150px;
  }
  @media (min-width: ${variables.desktopMin}) {
    max-width: 240px;
  }
`;
export const SlideCardContentReview = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 730px;
  @media (min-width: ${variables.mobileMax}) {
    padding-left: 15px;
    width: 70%;
  }
  @media (min-width: ${variables.desktopMin}) {
    padding-left: 45px;
  }
`;

export const SlideCardNameReview = styled.h3`
  font-size: 28px;
  font-weight: 600;
  @media (min-width: ${variables.desktopMin}) {
    font-size: 36px;
  }
`;

export const SlideCardReviewUser = styled.p`
`;

export const SlideCardProfessionReview = styled.p`
  padding-bottom: 15px;
`;


