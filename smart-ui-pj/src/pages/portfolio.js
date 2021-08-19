import React from "react";
import {GlobalStyle} from "../GlobalStyle";
import {DefaultStyle} from "../Default";
import {Link} from "react-router-dom";

const  Portfolio=()=>{

    return(
        <>
            <GlobalStyle/>
            <DefaultStyle/>
           <h1>Portfolio</h1>
           <Link to='/'>home</Link>
        </>
    )

}
export default Portfolio;
