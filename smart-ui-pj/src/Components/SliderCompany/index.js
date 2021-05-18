import {useEffect} from "react";
import Glide from '@glidejs/glide';
import {Slide} from './SlideCompany';
import {
    SliderWrap,
    SliderContent
} from "./SliderCompanyElements";
import {heroSliderImg} from "./SliderCompanyData";

const SliderCompany = () => {

    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            autoplay: 2000,
            startAt: 0,
            perView: 6,
            breakpoints: {
                992: {
                    perView: 3,
                }
            },
        }).mount();
    }, []);


    return (
        <SliderWrap>
            <SliderContent>
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides" style={{display: 'flex'}}>
                            {
                                heroSliderImg.map((slide, i) => {
                                    return (
                                        <Slide
                                            key={i + 'slide'}
                                            slide={slide}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </SliderContent>
        </SliderWrap>
    )
};
export default SliderCompany;