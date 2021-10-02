import { useEffect, useState } from "react";

const LazzyImg = ({min , medium , full , alt}) => { 
const [x, setx] = useState([min , medium+" 5x"])

    useEffect(() => {
       const t=setTimeout(() => {
            full?setx([ full]):setx([ medium]); 
        },800);
        return(
            ()=>{
                clearTimeout(t);
            }
        )
    }, [full,medium ])
    return (
         <img 
         srcSet={x[0] +", "+ x[1]}  
         src={min} alt={alt} />
    );
}

export default LazzyImg;