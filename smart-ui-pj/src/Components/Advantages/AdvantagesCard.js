import React from "react";
import { ButtonSend } from "../ButtonElement";
import {
  AdvantagesCadTitle,
  AdvantagesCardBox,
  AdvantagesCardText,
  AdvantagesCardTextWrap,
  AdvantagesIconWrap,
  ButtonWrap,
} from "./AdvantagesElements";

const AdvantagesCard = ({ logo, cardTitle, cardText, btn, altAdvantages }) => {

  return (
    <AdvantagesCardBox
    >
      <AdvantagesIconWrap>
        <img style={{ height: "100%" }} src={logo} alt={altAdvantages} />
      </AdvantagesIconWrap>
      <AdvantagesCardTextWrap>
        <AdvantagesCadTitle>{cardTitle}</AdvantagesCadTitle>
          <ButtonWrap>
            <ButtonSend
							as="a" href="#contactUs"
              type="submit"
              to="#contactUs"
              padding="20px 60px"
              primarybg="true"
              primarycolor="true"
            >
              {btn}
            </ButtonSend>
            <AdvantagesCardText>{cardText}</AdvantagesCardText>
          </ButtonWrap>
      </AdvantagesCardTextWrap>
    </AdvantagesCardBox>
  );
};

export default AdvantagesCard;
