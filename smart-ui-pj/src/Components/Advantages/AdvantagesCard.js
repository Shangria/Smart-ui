import React, {useEffect, useState} from "react";
import {Button} from '../ButtonElement';
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
            <AdvantagesIconWrap hover={hover}>
               <img src={logo} alt={altAdvantages}/>
            </AdvantagesIconWrap>
            <AdvantagesCardTextWrap>
                <AdvantagesCadTitle>{cardTitle}</AdvantagesCadTitle>
                {
                    hover ? <Button
                            padding='20px 60px'
                            primaryBg='true'
                            primaryColor='true'
                        >Write to us</Button>
                    :
                        <AdvantagesCardText>{cardText}</AdvantagesCardText>
                }
            </AdvantagesCardTextWrap>
        </AdvantagesCardBox>
    );
};

export default AdvantagesCard;