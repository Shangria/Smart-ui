import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCard = styled.div`
   width:100%;
   position:relative;
    text-decoration: none; 
    border: 1px solid rgb(227, 227, 227);
    border-radius: 8px; 
    color: rgb(48, 46, 45); 
    margin-bottom: 10px;
    overflow:hidden; 
     border:solid #e2e2e2 1px;  
      border-radius: 10px; 
      .link{
            position: absolute;
            top: 0; 
            left: 0;
            bottom: 0;
            right: 0; 
            z-index:1; 
     
         &:hover{
            &~.button-container a , &~.button-container button{ 

                  &::after{
                        width: 100%;
                  }
            }
      }
      }
      h3{ 
            min-height: 30px;
          
            font-size:24px;
            font-weight:400;
            margin-bottom: 10px;
      }
      .description{
            z-index:2;
            position:relative;
            padding: 20px;
      }
      .button-container{
            padding: 10px;
            text-align: center;  
            a, button{ 
                  display: block;
                  width:100%;
                  
            }
      }
   
  
`;