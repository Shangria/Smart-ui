import styled from "styled-components";
import { contactData } from "./ContactData";
import { variables } from "../../Variables";

export const ContactWrapper = styled.section`
  padding: 8% 0;
  background-image: url(${contactData.bg3}), url(${contactData.bg2}),
    url(${contactData.bg1});
  background-repeat: no-repeat;
  background-position: 95% 180%, 100% 0, 100% 0;
  background-size: 140% 90%, cover, cover;
  display: flex;
  justify-content: center;
  mix-blend-mode: multiply;

  @media (min-width: ${variables.desktopMin}) {
    background-position: 110% 90%, 100% 0, 100% 0;
    background-size: 70% 80%, cover, cover;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1310px;
  padding: 0 15px;
  width: 100%;
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${variables.desktopMin}) {
    flex-direction: row;
  }
`;

export const ContactAddressBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactTitle = styled.h3`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  padding-bottom: 30px;
  @media (min-width: ${variables.mobileMax}) {
    font-size: 48px;
    text-align-last: left;
  }
  @media (min-width: ${variables.desktopMin}) {
    font-size: 60px;
    padding-bottom: 60px;
  }
`;
export const ContactAddressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${variables.desktopMin}) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: ${variables.desktopMin}) {
    width: 65%;
    flex-direction: column;
  }
`;
export const ContactSubTitle = styled.h4`
  color: ${variables.accentColor};
  font-size: 28px;
  padding-bottom: 15px;
  font-weight: 600;

  @media (min-width: ${variables.mobileMax}) {
    font-size: 36px;
    padding-bottom: 30px;
  }
`;

export const ContactInfoAddress = styled.address`
  padding-bottom: 5px;
  font-style: normal;
  line-height: 30px;
  @media (min-width: ${variables.mobileMax}) {
    padding-bottom: 15px;
  }
`;

export const ContactLinksWrap = styled.div`
  padding: 30px 0;
  @media (min-width: ${variables.mobileMax}) {
    padding-bottom: 40px;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
`;

export const ContactIcon = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 20px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;

  span {
    transition: transform .3s;
  }

  &:hover {
    span {
      transform: translateX(4px);
    }
  }
`;

export const ContactFormWrapper = styled.div`
  width: 100%;
  margin-left: auto;
`;

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContactFormTitle = styled.h3`
  color: ${variables.mainBg};
  font-size: 28px;
  padding-bottom: 15px;
  font-weight: 600;
  align-self: center;
  @media (min-width: ${variables.desktopMin}) {
    align-self: flex-start;
  }
`;

export const ContactFormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${variables.mobileMax}) {
    width: 70%;
  }
`;

export const ContactFormData = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${variables.desktopMin}) {
    flex-direction: row;
  }
`;
export const ContactFormDataInput = styled.input`
  display: block;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #7c7b7b;
  width: 100%;
  margin: 5px 0 10px;
  font-size: 16px;

  @media (min-width: ${variables.mobileMax}) {
    margin: 15px 0 25px;
    padding: 15px;
  }
  @media (min-width: ${variables.wideScreenMin}) {
    max-width: 310px;
  }
`;

export const ContactFormMessage = styled.textarea`
  height: 230px;
  display: block;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #7c7b7b;
  width: 100%;
  margin: 5px 0 10px;
  font-size: 16px;
  @media (min-width: ${variables.mobileMax}) {
    margin: 15px 0 25px;
    padding: 15px;
    max-width: 100%;
  }
`;
export const ContactFormLabel = styled.label`
  position: relative;
  color: ${variables.secondFontColor};
  font-size: 14px;
  width: 100%;
  padding: 0;
  @media (min-width: ${variables.mobileMax}) {
    font-size: 22px;
    padding: 0 5px;
  }
`;

export const ContactFormError = styled.p`
  background-color: ${variables.mainBg};
  color: ${variables.accentColor};
  position: absolute;
  top: -15px;
  left: 0;
  font-size: 14px;
  padding: 10px;
  border-radius: 20px;
  width: 180px;
  box-shadow: 4px 4px 10px rgb(170 170 170 / 80%);

  :before {
    border-top: 7px solid rgba(255, 255, 255, 0.85);
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    bottom: -5px;
    content: "";
    display: block;
    left: 20%;
    margin-left: -7px;
    position: absolute;
  }

  @media (min-width: ${variables.mobileMax}) {
    top: 0;
  }
`;
