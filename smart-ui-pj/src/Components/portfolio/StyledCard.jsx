 
import styled from "styled-components";

export const StyledCard = styled.div`
      height:100%;
      display: flex;
      flex-direction: column;
            width:100%;
            position:relative;
            text-decoration: none; 
            border: 1px solid rgb(227, 227, 227);
            border-radius: 8px; 
            color: rgb(48, 46, 45);  
            overflow:hidden; 
            border:solid #e2e2e2 1px;  
            border-radius: 10px; 
      .images-container{
            position: relative;
      }
      .images-overlay{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transition: 0.5s;
            opacity: 0.2;
           background-image:linear-gradient( #000000a7 0%, rgba(6,9,16,0) 35%, rgba(12,18,32,0) 100%);
      }
      .left-column , .right-column{
            padding: 5px;
            position: absolute;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows:repeat(3, 1fr);
            gap:10px;
            grid-auto-flow: column;
            top: 0;
            left: 0;
            bottom: 0;
            width:50%;   
            .technology-img{
                        opacity: 0;
                        pointer-events: none;
                        transition: 0.3s;
                        transform:translate(-100px);
            }
      }
      .right-column{
            left:auto;
            right: 0;
            grid-template-areas: 
            "a6 a3 a0"
            "a7 a4 a1"
            "a8 a5 a2"; 
            .grid-item{ 
                  &:nth-child(1){
                        grid-area: a; 
                  } 
            }
            .technology-img{ 
                        transform:translate(100px);
            }
      }
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
               &~.images-container{
                   .images-overlay{
                     background:black;
                     opacity: 0.5;
               }  
               .technology-img{
                     opacity: 1;
                     transform:none;
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
            flex-grow: 1;
            z-index:2;
            position:relative;
            padding:10px 20px 5px;
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