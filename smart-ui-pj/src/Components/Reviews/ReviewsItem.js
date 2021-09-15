import React from 'react';
import {IconContainer, IconImg, ReviewsItemBox, ReviewsItemHead, ReviewsItemText} from './ReviewsElements';
import star from '../../Images/icon/star.svg';

const ReviewsItem = ({title, text}) => {

  return (
    <ReviewsItemBox>
      <ReviewsItemHead>{title}</ReviewsItemHead>

      <IconContainer>
        { [...Array(5)].map((_, index) => <IconImg src={star} key={index} alt="start icon" />) }
      </IconContainer>

      <ReviewsItemText>{text}</ReviewsItemText>
    </ReviewsItemBox>
  );
};

export default ReviewsItem;