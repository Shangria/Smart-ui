 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BorderButton from "../../modules/Buttons";
import LazzyText from "../../modules/LazzyText";
import ResponsiveImg from "../../modules/ResponsiveImg";
import { StyledCard } from "./StyledCard";

const PortfolioCard = ({link , dataWp , i}) => {
  
  console.log(dataWp , "data")
  function innerhtml(text) { return {__html: text}; };
 
return (
   
<StyledCard >
   <Link className="link" to={link}/>
    <ResponsiveImg h="9" w={16} alt="website preview"
        src="https://thumbs.dreamstime.com/b/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB-gool-20971928.jpg" /> 
        <div className="description">
                <h3>
                <LazzyText proptext={dataWp?.title?.rendered} timeout={1000*i} interval={100}/>
                </h3> 
                <p dangerouslySetInnerHTML={innerhtml(dataWp?.acf?.short_description)}/>
              
                 
        </div>
   
    <div className="button-container" >

 
        <BorderButton>
            Узнать больше
        </BorderButton>
    </div>
</StyledCard>

);
}

export default PortfolioCard;