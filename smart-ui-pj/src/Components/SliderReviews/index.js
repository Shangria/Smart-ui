import {useEffect} from "react";
import Glide from '@glidejs/glide';
import {reviewsSliders} from "../SliderReviews/SliderReviewsData";
import {SlideReview} from "./SlideReviews";
import {
    glideReviews,
    glideSlides,
    glideBullet,
    glideBullets
} from "./styles";


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
        <div style={glideReviews}
            className="glide-reviews">
            <div className="glide__track" data-glide-el="track">
                <ul style={glideSlides}
                    className="glide__slides">
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
            <div style={glideBullets}
                className="glide__bullets"
                 data-glide-el="controls[nav]">
                {
                    reviewsSliders.map((slide,index)=>{
                        return(
                            <button key={index+"glideBullet"}
                                className="glide__bullet"
                                    style={glideBullet}
                                    data-glide-dir={"="+index}>
                            </button>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default ReviewsSlider