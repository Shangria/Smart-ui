import React, {useEffect, useState} from "react";
import {ButtonSend} from '../ButtonElement';
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
                <img style={{height: "100%"}}
                     src={logo} alt={altAdvantages}/>
            </AdvantagesIconWrap>
            <AdvantagesCardTextWrap>
                <AdvantagesCadTitle>{cardTitle}</AdvantagesCadTitle>
                {
                    hover ? <ButtonSend
                            type="submit"
                            to="#"
                            padding='20px 60px'
                            primarybg='true'
                            primarycolor='true'
                        >{btn}</ButtonSend>
                        :
                        <AdvantagesCardText>{cardText}</AdvantagesCardText>
                }
            </AdvantagesCardTextWrap>
        </AdvantagesCardBox>
    );
};

export default AdvantagesCard;