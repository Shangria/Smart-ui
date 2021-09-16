import { Link } from "react-router-dom";
import BorderButton from "../../modules/Buttons";
import ResponsiveImg from "../../modules/ResponsiveImg";
import { StyledCard } from "./StyledCard";

const PortfolioCard = () => {



return (

<StyledCard>

    <ResponsiveImg h="16" w={14} alt="website preview"
        src="https://thumbs.dreamstime.com/b/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB-gool-20971928.jpg" />
    <h3>
        site name
    </h3>

    <p>
        site short description
    </p>

    <div style={{
       display:'flex',
       justifyContent:'space-between'
   }}>


        <BorderButton>
            Show website
        </BorderButton>
        <BorderButton>
            Узнать больше
        </BorderButton>
    </div>
</StyledCard>

);
}

export default PortfolioCard;