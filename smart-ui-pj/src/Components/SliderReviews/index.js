import {useEffect} from "react";
import Glide from '@glidejs/glide';
import {reviewsSliders} from "../SliderReviews/SliderReviewsData";
import {SlideReview} from "./SlideReviews";


const ReviewsSlider = () => {

    useEffect(() => {
        new Glide('.glide-reviews', {
            type: 'slider',
            // autoplay:2000,
            startAt: 0,
            perView: 1,
        }).mount();
    }, []);


    return (
        <div className="glide-reviews">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {
                        reviewsSliders.map((slide, index)=>{
                            return(
                                <SlideReview
                                    key={index+"slideReviews"}
                                    slide={slide}/>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0"></button>
            </div>
        </div>
    );
};

export default ReviewsSlider