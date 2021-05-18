import {
    SlideCardContentReview,
    SlideCardNameReview,
    SlideCardProfessionReview,
    SlideReviewImgWrap,
    SlideCardReviewUser,
    SlideReviewWrapper
} from "./SliderReviewsElements";

export const SlideReview = ({slide}) => {
    return (
        <li className="glide__slide">
            <SlideReviewWrapper>
                <SlideReviewImgWrap>
                    <img src={slide.userLogo} alt={slide.userAlt}/>
                </SlideReviewImgWrap>
                <SlideCardContentReview>
                    <SlideCardNameReview>{slide.userName}</SlideCardNameReview>
                    <SlideCardProfessionReview>{slide.userProfession}</SlideCardProfessionReview>
                    <SlideCardReviewUser>{slide.userReview}</SlideCardReviewUser>
                </SlideCardContentReview>
            </SlideReviewWrapper>
        </li>
    )
};