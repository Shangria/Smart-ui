export const Slide=({slide})=>{
    console.log(slide)
    return(
        <li className="glide__slide">
            <img src={slide.slideImg}/>
        </li>
    )
};