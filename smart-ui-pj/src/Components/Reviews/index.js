import React from "react";
import {
    ReviewsContentWrap,
    ReviewsText,
    ReviewsContainer,
    ReviewsTextWrap,
    ReviewsTitle,
    ReviewsSliderContainer
}
from "./ReviewsElements";
import ReviewsSlider from "../SliderReviews";


const Reviews = () => {
    return (
        <ReviewsContainer>
            <ReviewsContentWrap>
                <ReviewsTextWrap>
                    <ReviewsTitle>Reviews</ReviewsTitle>
                    <ReviewsText>We help to develop business, using complex modern effective it solutions, tools of web
                        development and Internet marketing.</ReviewsText>
                </ReviewsTextWrap>
                <ReviewsSliderContainer>
                    <ReviewsSlider/>
                </ReviewsSliderContainer>
            </ReviewsContentWrap>
        </ReviewsContainer>
    );
};

export default Reviews;