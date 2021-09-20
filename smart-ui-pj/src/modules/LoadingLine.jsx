import styled, { keyframes } from "styled-components";


const breatheAnimation = keyframes`
0% {  opacity:1 } 
100% { opacity:0.1}
`

const Load=styled.span` 
display:block;
position:relative; 
 &::before{
     position: absolute;
     content: "";
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background: linear-gradient(90deg, rgba(110,109,109,1) 0%, rgba(179,177,177,1) 100%);
     animation: 2s linear  infinite alternate ${breatheAnimation}; 
    animation-delay: ${ ({d})=>d};
 }

color: transparent;
background: linear-gradient(90deg, #e0e0e0 0%, #c7c7c7 100%);

`
const LoadingLine = ({h,w,d,m}) => {


    return (
        <Load style={{height:h?h:"" , width:w?w:"" , margin:m?m:"10px 0" }}  d={d?d:0}>
            loading...
        </Load>
    );
}

export default LoadingLine;