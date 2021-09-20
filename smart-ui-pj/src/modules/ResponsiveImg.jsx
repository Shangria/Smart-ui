import styled from "styled-components";
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
                        background-color: #8effc12f;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                ` 
        
        const ResponsiveImg = ({src , h, w, alt}) => { 
            return (
             <StContainer h={h} w={w}> 
                              <figure>
                                  {src? <img src={src} alt={alt} /> :<LoadingLine h="100%" m="0" d="180"/>}
                                   
                              </figure> 
             </StContainer>
            );
        }

export default ResponsiveImg;