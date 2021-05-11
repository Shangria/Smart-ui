import {useEffect} from "react";
import Glide from '@glidejs/glide';
import {Slide} from './SlideCompany';
import {SliderWrap} from "./SliderCompanyElements";
import {heroSliderImg} from "../Slider/SliderCompanyData";

const SliderCompany = () => {

    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            autoplay: 2000,
            startAt: 0,
            perView: 4,
            breakpoints: {
                768: {
                    perView: 1,
                }
            },
        }).mount();
    }, []);


    return (
        <SliderWrap>
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
        </SliderWrap>
    )
};
export default SliderCompany;