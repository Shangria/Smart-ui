import React, { useEffect, useState } from "react";
import  {Col, Container, Row} from "react-bootstrap";
 
import HeroSection from "../Components/HeroSection";
import { HeroTitle } from "../Components/HeroSection/HeroElements";
import PortfolioCard from "../Components/portfolio/PortfolioCard";



const Portfolio = () => {
const [data ,setData]  = useState([])
  useEffect(() => { 
       fetch("http://wdev.smart-ui.pro/wp-json/wp/v2/posts") 
        .then((response) => {
          return response.json();
        })
        .then((rest) => {
          console.log(rest)
          setData(rest);
        }); 
  }, [])
        
  


  return (
    <> 
        <section style={{marginTop:'150px'}}>
            <Container>  
                  <HeroTitle style={{textAlign:'center'}}>
                     Our portfolio 
                 </HeroTitle> 
                <Row xs={1}  md={2}  xl={3}>
                       {data.map((post,i)=>  (<Col key={i+"a"}>   <PortfolioCard link={"/test"}
                       dataWp={post}  i={i} /> </Col> )  )}  
                </Row>
            </Container>  
        </section>  
    </>
  );
};
export default Portfolio;
