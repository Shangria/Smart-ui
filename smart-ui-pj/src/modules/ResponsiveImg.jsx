import styled from "styled-components";
import LazzyImg from "./LazzyImg";
import LoadingLine from "./LoadingLine";
               const StContainer=styled.div` 
                   position: relative;
                   padding-bottom: ${({h,w})=>(h/w*100+"%")};
                   figure{
                        position: absolute;
                        padding:0;
                        margin: 0;
                        left: 0;
                        top:0;
                        bottom: 0;
                        right: 0;
                        background-color: #6464642e;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                ` 
        
        const ResponsiveImg = ({src , h, w, alt , imgMin, imgFull, imgMedium}) => { 
            return (
             <StContainer h={h} w={w}> 
                              <figure>
                                  {src||imgMedium||imgFull?  <LazzyImg  min={imgMin} medium={imgMedium} full={imgFull} alt={alt?alt:"webpage screenshot" }/>  :<LoadingLine h="100%" m="0" d="180"/>}
                                   
                              </figure> 
             </StContainer>
            );
        }

export default ResponsiveImg;