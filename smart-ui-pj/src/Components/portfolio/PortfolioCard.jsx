 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BorderButton from "../../modules/Buttons";
import LazzyText from "../../modules/LazzyText";
import LoadingLine from "../../modules/LoadingLine";
import ResponsiveImg from "../../modules/ResponsiveImg";
import { StyledCard } from "./StyledCard";

const PortfolioCard = ({link , dataWp , i}) => {
   
  function innerhtml(text) { return {__html: text}; }; 
return (
   
<StyledCard >
   <Link className="link" to={link}/>
    <ResponsiveImg h="9" w={16} alt="website preview"
        src="" /> 
        <div className="description">
                <h3>
               { dataWp?.title?.rendered? <LazzyText proptext={dataWp?.title?.rendered} timeout={1000*i} interval={100}/> : <LoadingLine/>   }
               
                </h3> 
               { dataWp?.acf?.short_description?  <p dangerouslySetInnerHTML={innerhtml(dataWp?.acf?.short_description)}/>:<>
               <LoadingLine h="20px" w="40%" d="300ms" />
               <LoadingLine h="20px" w="90%" d="600ms"/>
               <LoadingLine h="20px" w="55%" />
               </> }
               
              
                 
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