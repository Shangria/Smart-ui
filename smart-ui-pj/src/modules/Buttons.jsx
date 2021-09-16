import styled from "styled-components";

const BorderButton =  styled.button`
padding:10px 20px;
 background-color: transparent;
color:var(--primary-color); 
border: solid var(--primary-color) 1px;
position: relative;
transition: 0.3s; 

        &::after{
            content: ""; 
            
            background-color: #3874b911;
            position: absolute; 
            left:0;
            width: 0%;
            top: 0;
            bottom: 0;
            transition: 0.3s;
        }
        &:hover{ 
            &::after{
                width: 100%; 
            }
        }
`


export default BorderButton;