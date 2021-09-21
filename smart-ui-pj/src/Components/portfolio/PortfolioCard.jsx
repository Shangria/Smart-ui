 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BorderButton from "../../modules/Buttons";
import LazzyText from "../../modules/LazzyText";
import LoadingLine from "../../modules/LoadingLine";
import ResponsiveImg from "../../modules/ResponsiveImg";
import { StyledCard } from "./StyledCard";

const PortfolioCard = ({ dataWp , i}) => { 
    const link ="portfolio/"+dataWp?.id; 
    const origin = dataWp?.acf?.link_to_origin_site;
   const imgMin = dataWp?.acf?.preview_img?.sizes?.thumbnail;
   const imgMedium = dataWp?.acf?.preview_img?.sizes?.large;

   
   const alt =dataWp?.acf?.preview_img?.alt;
  function innerhtml(text) { return {__html: text}; }; 
return (
   
<StyledCard >

   {dataWp?.id?<Link className="link" to={link}/>:""}
  
    <ResponsiveImg h="9" w={16} alt={alt?alt:"webpage preview"}
         imgMin={imgMin}  imgMedium={imgMedium} /> 
        <div className="description">
                <h3>
               { dataWp?.title?.rendered? <LazzyText proptext={dataWp?.title?.rendered} timeout={1000*i} interval={100}/> : <LoadingLine/>   } 
                </h3> 
                {origin?  <a href=" ">website</a>  :    <LoadingLine h="10px" w="30%" d="100ms" />}  
               { dataWp?.acf?.short_description?  <p dangerouslySetInnerHTML={innerhtml(dataWp?.acf?.short_description)}/>:<>
               <LoadingLine h="18px" w="40%" d="300ms" />
               <LoadingLine h="18px" w="90%" d="600ms"/>
               <LoadingLine h="18px" w="55%" />
               </> }     
        </div>
   
    <div className="button-container" >

    {dataWp?.id?  <BorderButton>     Узнать больше  </BorderButton>: <LoadingLine h="43px"/>}
      
    </div>
</StyledCard>

);
}

export default PortfolioCard;