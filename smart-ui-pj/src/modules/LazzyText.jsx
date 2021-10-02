 
import styled, { keyframes } from "styled-components";


    
const Animation = keyframes`
0% {    transform: translateX(100vw); } 
100% {   transform: translateX(0);}
`
    const Lazzy = styled.span`
    display: block;
    width: 100%;
    i{
        font-style: normal;
        display: inline-block;
        min-width: 5px;
        /* margin-right:1em; */
        transform: translateX(100vw);
        animation: 300ms linear forwards  ${Animation}; 
        animation-delay:0s;
    } 
    `
const LazzyText = ({proptext , interval ,timeout}) => { 

 
  let arrproptext=[" "];
  if(proptext.length>1){
          arrproptext= proptext.split("");
  }
 
   



    return (
        <Lazzy> { arrproptext.map((sym, i)=>  <i key={i} style={{animationDelay:i*40+"ms"}}>{sym } </i>  )}</Lazzy>
    );
}

export default LazzyText;