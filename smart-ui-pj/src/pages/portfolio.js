import React, { useEffect, useState } from "react";
import  {Col, Container, Row} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
 
import { useHistory } from "react-router";
  
import { HeroTitle } from "../Components/HeroSection/HeroElements";
import PortfolioCard from "../Components/portfolio/PortfolioCard";
import { FETCH__POSTS } from "../redux/types";
import { allPostsFetchAction } from '../redux/actions'


const Portfolio = ( ) => {
const [data ,setData]  = useState([0,0,0,0,0,0]) 
const dispatch = useDispatch();
  // const allPosts = useSelector(state=>state.postReducer);
   
//  console.log(allPosts) 
   dispatch(  allPostsFetchAction) 
  useEffect(() => { 
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  }); 
       fetch("http://wdev.smart-ui.pro/wp-json/wp/v2/posts") 
        .then((response) => {
          return response.json();
        })
        .then((rest) => { 
          Array.isArray(rest)?setData(rest):console.log('wp connection lost');
          rest.forEach((r) => {
            // console.log(r.acf)
          }); 
        }); 
  }, []) 
   
  return (
    <> 
        <section style={{marginTop:'150px'}}>
            <Container>  
                  <HeroTitle style={{textAlign:'center' , marginBottom:"50px"}}>
                     Our portfolio 
                 </HeroTitle> 
                <Row xs={1}  md={2}  xl={3}>
                       {data.map((post,i)=>  (<Col key={i+"a"} style={{marginBottom:"20px"}}>   <PortfolioCard  
                       dataWp={post}  i={i} /> </Col> )  )}  
                </Row>
            </Container>  
        </section>  
    </>
  );
};
 
export default  Portfolio ;
