import styled from 'styled-components';
import {variables} from "../../Variables";

export const SlideReviewImgWrap = styled.div`
  display: flex;
`;
export const SlideCardContentReview = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SlideCardNameReview = styled.h3`
  font-size: 28px;
  font-weight: 600;
  @media (min-width: ${variables.desktopMin}) {
    font-size: 36px;
  }
`;

export const SlideCardProfessionReview = styled.p`
  padding-bottom: 15px;
  display: block;
`;

export const SlideCardReviewUser = styled.p`
  font-size: 28px;
`;

