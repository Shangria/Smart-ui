import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { HeroTitle } from "../Components/HeroSection/HeroElements";
import LoadingLine from "../modules/LoadingLine";

function Post( ) {
    const {slug} = useParams();
    const preloader = [33,12,55,67,94,35,86,75,14,98]
    const [data ,setData]  = useState(0);
    function innerhtml(text) { return {__html: text}; }; 
    useEffect(() => { 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        fetch(`http://wdev.smart-ui.pro/wp-json/wp/v2/posts/${slug}`) 
         .then((response) => {
           return response.json();
         })
         .then((rest) => { 
            rest ?setData(rest):console.log('wp connection lost');
           setData(rest); 
         }); 
         
        const css = document.createElement('link');
        css.href="http://wdev.smart-ui.pro/wp-includes/css/dist/block-library/style.min.css";
        css.rel="stylesheet";
        css.type="text/css";
        document&&document.body&&document.body.append(css);
        return(()=>{
            css&&css.remove();
        }     
        )
   }, [slug]) 
    return(
        <section style={{marginTop:'150px'}}>
        <Container>  
              <HeroTitle style={{textAlign:'center' , marginBottom:"50px"}}>
                 {data?.title?data?.title?.rendered: <LoadingLine h="67px" w={77 + "%"} d={ 2*1200 + "ms"}/>}
             </HeroTitle> 
             <div>
             { data?.content?.rendered?  <p dangerouslySetInnerHTML={innerhtml(data?.content?.rendered)}/>:<>
     
                        {preloader.map((item, i )=>{
                            return(
                                <LoadingLine h="38px" w={item + "%"} d={ i*1200 + "ms"}/>
                            )
                        })}
               </> } 
             </div>
        </Container>  
    </section>  
    )
}

export default Post ;