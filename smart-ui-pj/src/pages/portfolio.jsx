import React from "react";
import  {Col, Container, Row} from "react-bootstrap";
 
import HeroSection from "../Components/HeroSection";
import { HeroTitle } from "../Components/HeroSection/HeroElements";

const Portfolio = () => {
  return (
    <>
  
        <section style={{marginTop:'150px'}}>
            <Container> 
                  <HeroTitle style={{textAlign:'center'}}>
                     Our portfolio 
                </HeroTitle>
            </Container>  
        </section> 

    </>
  );
};
export default Portfolio;
