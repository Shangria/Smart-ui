import {
    SlideCardContentReview,
    SlideCardNameReview,
    SlideCardProfessionReview,
    SlideReviewImgWrap,
    SlideCardReviewUser
} from "./SliderReviewsElements";

export const SlideReview = ({slide}) => {
    return (
        <li className="glide__slide">
            <SlideReviewImgWrap>
                <img src={slide.userLogo} alt={slide.userAlt}/>
            </SlideReviewImgWrap>
            <SlideCardContentReview>
                <SlideCardNameReview>{slide.userName}</SlideCardNameReview>
                <SlideCardProfessionReview>{slide.userProfession}</SlideCardProfessionReview>
                <SlideCardReviewUser>{slide.userReview}</SlideCardReviewUser>
            </SlideCardContentReview>
        </li>
    )
};