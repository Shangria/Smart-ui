import React from "react";
import  {Col, Container, Row} from "react-bootstrap";
 
import HeroSection from "../Components/HeroSection";
import { HeroTitle } from "../Components/HeroSection/HeroElements";
import Card from "../Components/portfolio/PortfolioCard";

const Portfolio = () => {

        const data = [1,1,1,1,1,1,1]

  return (
    <> 
        <section style={{marginTop:'150px'}}>
            <Container> 
                  <HeroTitle style={{textAlign:'center'}}>
                     Our portfolio 
                </HeroTitle>
               
                <Row xs={1}  md={2}  lg={3}>
                       {data.map((i )=>    <Card/>   )} 

                     
                </Row>
            </Container>  
        </section> 

    </>
  );
};
export default Portfolio;
