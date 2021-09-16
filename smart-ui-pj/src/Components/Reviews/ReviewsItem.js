import React, {useEffect, useState} from 'react';
import {IconContainer, IconImg, ReviewsItemBox, ReviewsItemHead, ReviewsItemDate, ReviewsItemText} from './ReviewsElements';
import {ReactComponent as StarIcon} from '../../Images/icon/star.svg';

const ReviewsItem = ({title, date, text}) => {
  const [ReviewsBoxHover, ReviewsBoxSetHover] = useState(false);

  useEffect(() => {
    ReviewsBoxSetHover(ReviewsBoxHover);
  }, [ReviewsBoxHover]);

  return (
    <ReviewsItemBox 
      onMouseEnter={() => ReviewsBoxSetHover(true)}
      onMouseLeave={() => ReviewsBoxSetHover(false)}
      hover={ReviewsBoxHover}
    >
      <ReviewsItemHead>{title}</ReviewsItemHead>

      <IconContainer>
        { [...Array(5)].map((_, index) => (
          <IconImg key={index}>
            <StarIcon />
          </IconImg>
        )) }
      </IconContainer>
      <ReviewsItemDate>{date}</ReviewsItemDate>

      <ReviewsItemText>"{text}"</ReviewsItemText>
    </ReviewsItemBox>
  );
};

export default ReviewsItem;