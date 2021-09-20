import { useEffect, useState } from "react";

const LazzyText = ({proptext , interval ,timeout}) => { 
    const [text, setText] = useState("")
useEffect(() => { 
    let result=""
    let i=0;
    if(proptext.length>1){
        console.log(proptext);
        setTimeout(() => {
        const lazzyTitle=setInterval(() => {
            if(i>proptext.length-2||i>500){
                clearInterval(lazzyTitle)
            }  
            result += proptext[i];
            setText(result) ;
          i++;
          }, interval);
    }, timeout);
    }       
}, [])
    return (
        <span>{text}</span>
    );
}

export default LazzyText;