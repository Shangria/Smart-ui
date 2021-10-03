import { useEffect, useState } from "react";
import styled from "styled-components";

const Progress=styled.div`
 position: relative; 
width:100%; 
.progress__svg {
    height: 100%;
    width: 100%;
}

.progress-text {
    color: rgb(253, 89, 89);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100%;
    font-weight: 900;
}

.svg-line {
    fill: rgba(253, 6, 6, 0.205);
    transform: rotate(-87.9537deg);
    transform-origin: 50% 50%;
    stroke: red;
    stroke-linecap: round;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    stroke-dasharray: 1, 360;
    transition: 2.5s; 
} 

@keyframes p50 {
    0% {
        stroke: red;
        fill: rgba(253, 182, 182, 0.993)
    }

    100% {
        stroke: #ffa400;
        fill: #f8d59460;
    }

}

@keyframes p90 {
    0% {
        stroke: red;
        fill: rgba(250, 188, 188, 0.993)
    }

    50% {
        stroke: #ffa400;
        fill: #f8f0e2;
    }

  

    100% {
        stroke: #0cce6b;
        fill: #d9fcea;
    }
}

`;

const PagespeedCounter=({result})=> {

 
const [textC, settextC] = useState('red');
const [animation, setAnimation] = useState(0);
const [ stroke, setStroke] = useState(`${360/100*0}, 360`);
  
        useEffect(() => {  
            let i =0; 
            result.toString()>49&&settextC("#ffa400") ;
            result.toString()>89&&settextC("#0cce6b") ;
           const interval= setInterval(() => {
            
                  i>=result&&clearInterval(interval) ;  
                  result>1?i++:clearInterval(interval);
            }, 2500/result);
            setTimeout(() => {
                setStroke(`${360/100*result-10}, 360`);
              if(result>49){
                setAnimation('p50');
              }
              if(result>89){
                setAnimation('p90');
              } 
            },200);
            return () => {
                clearInterval(interval);
            }
        }, [result])

    return (<Progress >
         <svg className="progress__svg"viewBox="0 0 120 120"> 
         <circle style={{strokeDasharray:stroke , animationName:animation}} className="svg-line"r="56"cx="60"cy="60"strokeWidth="8"></circle> 
         </svg> 
         <span style={{color:textC}} className="progress-text">{result}</span> </Progress>);
}

export default PagespeedCounter;