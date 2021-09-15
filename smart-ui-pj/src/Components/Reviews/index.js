import React from "react";
import {
  ReviewsContentWrap,
  ReviewsText,
  ReviewsContainer,
  ReviewsTextWrap,
  ReviewsTitle,
  ReviewsItemsContainer,
} from "./ReviewsElements.js";
import ReviewsItem from "./ReviewsItem";
import {
  reviewsData1,
  reviewsData2,
  reviewsData3,
  reviewsData4,
} from "./ReviewsData";
// import ReviewsSlider from "../SliderReviews";

const Reviews = () => {
  return (
    <ReviewsContainer>
      <ReviewsContentWrap>
        <ReviewsTextWrap>
          <ReviewsTitle>Reviews</ReviewsTitle>
          <ReviewsText>
            We help to develop business, using complex modern effective it
            solutions, tools of web development and Internet marketing.
          </ReviewsText>
        </ReviewsTextWrap>
        <ReviewsItemsContainer>
          {/* <ReviewsSlider/> */}

          <ReviewsItem {...reviewsData1} />
          <ReviewsItem {...reviewsData2} />
          <ReviewsItem {...reviewsData3} />
          <ReviewsItem {...reviewsData4} />
          
        </ReviewsItemsContainer>
      </ReviewsContentWrap>
    </ReviewsContainer>
  );
};

export default Reviews;
