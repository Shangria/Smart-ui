 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BorderButton from "../../modules/Buttons";
import LazzyText from "../../modules/LazzyText";
import LoadingLine from "../../modules/LoadingLine";
import PagespeedCounter from "../../modules/PagespeedCounter";
import ResponsiveImg from "../../modules/ResponsiveImg";
import { StyledCard } from "./StyledCard";

const PortfolioCard = ({ dataWp , i}) => { 
    const link ="portfolio/"+dataWp?.id; 
    const origin = dataWp?.acf?.link_to_origin_site;
    const imgMin = dataWp?.acf?.preview_img?.sizes?.thumbnail;
    const imgMedium = dataWp?.acf?.preview_img?.sizes?.large;
    const mainTechnology=dataWp?.acf?.technology?.icon_for_technology?.sizes?.medium; 
    const additionalTechnology=dataWp?.acf?.technology?.other_icons; 
    const benefits=dataWp?.acf?.benefits;  
    const alt =dataWp?.acf?.preview_img?.alt;
    function innerhtml(text) { return {__html: text}; }; 
    const [fade, setfade] = useState(0);
    useEffect(() => {
        const t = setTimeout(() => {
            setfade(1);
        }, 2500);
        return () => {
             clearInterval(t);
        }
    }, [ ])
return (
   
<StyledCard >

   {dataWp?.id?<Link className="link" to={link}/>:""}
    <div className="images-container">
        <ResponsiveImg h="9" w="16" alt={alt?alt:"webpage preview"} imgMin={imgMin}  imgMedium={imgMedium} /> 
        <div className="images-overlay"></div>
        <div className="left-column">
            {mainTechnology&&<img src={mainTechnology} alt="main technology" />}
            {additionalTechnology&&additionalTechnology.map((img , i)=>
                <img style={{transitionDelay:i*300+300+'ms'}} className="technology-img" key={i} src={img?.sizes?.medium} alt="technology" />  )}
        </div>
        <div className="right-column">
            <div style={{gridArea:'a0'}}>
            {benefits?.google_pagespeed?.value>1&&fade? <PagespeedCounter result={benefits?.google_pagespeed?.value}/>:""} 
            </div> 
                         {additionalTechnology&&additionalTechnology.map((img , i)=>
                        <img   className="technology-img" key={i} style={{gridArea: 'a'+(i+1) ,transitionDelay:i*300+300+'ms'}} src={img?.sizes?.medium} alt="technology" />  )  }  
        </div>
    </div>
  
        <div className="description">
                <h3>
               { dataWp?.title?.rendered? <LazzyText proptext={dataWp?.title?.rendered} timeout={1000*i} interval={100}/> : <LoadingLine/>   } 
                </h3> 
                {origin?  <a style={{color:"blue" ,textDecoration:"underline" , marginBottom:10}} target="blank" href={origin}>website</a>  :    <LoadingLine h="10px" w="30%" d="100ms" />}  
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