import { Link } from "react-router-dom";
import { StyledCard } from "./StyledCard";

const PortfolioCard = () => {



    return (
        
<StyledCard href="#"   className="card-wrapper v2">
<div className="card-img-block">
    <img src="img/moody-restaurant-food-web-site-mock-up_23-2148406845.jpeg" alt=""/>
    <div className="card-icons">
        <div className="absolute top-0 left-0 left-side">
            <div className="card-icon">
                <img src="img/Wordpress_logo.png" alt=""/>
            </div>
            <div className="card-icon card-onhover">
                <img src="img/html.png" alt=""/>
            </div>
            <div className="card-icon card-onhover">
                <img src="img/css.png" alt=""/>
            </div>
            <div className="card-icon card-onhover">
                <img src="img/JavaScript-logo.png" alt=""/>
            </div>
            <div className="card-icon card-onhover">
                <img src="img/php.png" alt=""/>
            </div>
        </div>
        <div className="absolute top-0 right-0 right-side">
            <div className="card-icon card-onhover pagespeed-icon">
                70
            </div>
            <div className="card-icon card-onhover">
                <img src="img/carbon_fields.jpeg" alt=""/>
            </div>
            <div className="card-icon card-onhover">
                <img src="img/acf.png" alt=""/>
            </div>
        </div>
    </div>
</div>
<div className="card-text-block">
    <p className="card-title">Smart-ui.pro</p>
    <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut dolor qui alias earum reprehenderit saepe doloremque incidunt iure perferendis praesentium consequatur dicta nam, cupiditate illum, sit commodi quod totam.</div>
</div>

</StyledCard>

    );
}

export default PortfolioCard;


