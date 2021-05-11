export const Slide=({slide})=>{
    return(
        <li className="glide__slide">
            <img src={slide.slideImg}/>
        </li>
    )
};