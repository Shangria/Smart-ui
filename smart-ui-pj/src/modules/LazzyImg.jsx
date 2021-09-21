import { useEffect, useState } from "react";

const LazzyImg = ({min , medium , full , alt}) => { 
const [x, setx] = useState([min , medium+" 2x"])

    useEffect(() => {
        setTimeout(() => {
            setx([" ",  medium])
        },800);
    
    }, [ ])
    return (
         <img 
         srcSet={x[0] ,x[1]} 
        //  srcSet={min+ " ,"+medium+" 3x"} 
         src={min} alt={alt} />
    );
}

export default LazzyImg;