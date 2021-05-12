import React, {useEffect, useState} from "react";
import {
    AdvantagesCadTitle,
    AdvantagesCardBox,
    AdvantagesCardText,
    AdvantagesCardTextWrap,
    AdvantagesIconWrap,
} from "./AdvantagesElements";


const AdvantagesCard = ({
                       logo,
                            cardTitle,
                            cardText,
                            btn,
                            altAdvantages,
                   }) => {

    const [hover, setHover] = useState(false);

    useEffect(() => {
        setHover(hover);
    }, []);

    return (
        <AdvantagesCardBox onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      hover={hover}
        >
            <AdvantagesIconWrap>
               <img src={logo} alt={altAdvantages}/>
            </AdvantagesIconWrap>
            <AdvantagesCardTextWrap>
                <AdvantagesCadTitle>{cardTitle}</AdvantagesCadTitle>
                <AdvantagesCardText>{cardText}</AdvantagesCardText>
            </AdvantagesCardTextWrap>
        </AdvantagesCardBox>
    );
};

export default AdvantagesCard;