import styled from "styled-components";

      
        
        const ResponsiveImg = ({src , h, w, alt}) => {
                const StContainer=styled.div` 
                   position: relative;
                   padding-bottom: ${h/w*100+"%"};
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

            return (
             <StContainer> 
                              <figure>
                                    <img src={src} alt={alt} />
                              </figure> 
             </StContainer>
            );
        }

export default ResponsiveImg;