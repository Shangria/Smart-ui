import React, {useEffect, useState} from "react";
import {
    AdvantagesCadTitle,
    AdvantagesCardBox,
    AdvantagesCardText,
    AdvantagesCardTextWrap,
    AdvantagesIconWrap,
} from "./AdvantagesElements";


const AdvantagesCard = ({
                       icon,
                       title,
                       text,
                       alt
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
                <img src={icon} alt={alt}/>
            </AdvantagesIconWrap>
            <AdvantagesCardTextWrap>
                <AdvantagesCadTitle>{title}</AdvantagesCadTitle>
                <AdvantagesCardText>{text}</AdvantagesCardText>
            </AdvantagesCardTextWrap>
        </AdvantagesCardBox>
    );
};

export default AdvantagesCard;