import React from "react";
import {
  IconContainer,
  IconImg,
  ReviewsItemBox,
  UpworkLogo,
  ReviewsItemDate,
  ReviewsItemText,
} from "./ReviewsElements";
import { ReactComponent as StarIcon } from "../../Images/icon/star.svg";
import { ReactComponent as UpworkSVG } from "../../Images/icon/upwork-tile.svg";

const ReviewsItem = ({ date, text }) => {
  return (
    <ReviewsItemBox>
      <UpworkLogo>
        <UpworkSVG />
      </UpworkLogo>

      <IconContainer>
        {[...Array(5)].map((_, index) => (
          <IconImg key={index}>
            <StarIcon />
          </IconImg>
        ))}
      </IconContainer>
      <ReviewsItemDate>{date}</ReviewsItemDate>

      <ReviewsItemText>"{text}"</ReviewsItemText>
    </ReviewsItemBox>
  );
};

export default ReviewsItem;
