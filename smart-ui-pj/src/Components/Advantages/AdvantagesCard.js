import React, {useEffect, useState} from "react";
import {ButtonSend} from '../ButtonElement';
import {
    AdvantagesCadTitle,
    AdvantagesCardBox,
    AdvantagesCardText,
    AdvantagesCardTextWrap,
    AdvantagesIconWrap,
    ButtonWrap,
} from "./AdvantagesElements";


const AdvantagesCard = ({
                            logo,
                            cardTitle,
                            cardText,
                            btn,
                            altAdvantages,
                        }) => {

    const [advantagesHover, advantagesSetHover] = useState(false);

    useEffect(() => {
        advantagesSetHover(advantagesHover);
    }, [advantagesHover]);

    return (
        <AdvantagesCardBox onMouseEnter={() => advantagesSetHover(true)}
                           onMouseLeave={() => advantagesSetHover(false)}
                           hover={advantagesHover}
        >
            <AdvantagesIconWrap hover={advantagesHover}>
                <img style={{height: "100%"}}
                     src={logo} alt={altAdvantages}/>
            </AdvantagesIconWrap>
            <AdvantagesCardTextWrap>
                <AdvantagesCadTitle>{cardTitle}</AdvantagesCadTitle>
                {
                    advantagesHover ? <ButtonWrap>
                            <ButtonSend
                                type="submit"
                                to="#"
                                padding='20px 60px'
                                primarybg='true'
                                primarycolor='true'
                            >{btn}</ButtonSend>
                        </ButtonWrap>

                        :
                        <ButtonWrap>
                            <AdvantagesCardText>{cardText}</AdvantagesCardText>
                        </ButtonWrap>

                }
            </AdvantagesCardTextWrap>
        </AdvantagesCardBox>
    );
};

export default AdvantagesCard;