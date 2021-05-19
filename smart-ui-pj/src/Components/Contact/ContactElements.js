import styled from 'styled-components';
import {contactData} from "./ContactData";
import {variables} from "../../Variables";

export const ContactWrapper = styled.section`
  padding: 8% 0;
  background-image: url(${contactData.bg3}), url(${contactData.bg2}), url(${contactData.bg1});
  background-repeat: no-repeat;
  background-position: 110% 90%, 100% 0, 100% 0;
  background-size: 70% 80%, cover, cover;
  display: flex;
  justify-content: center;
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
  width: 65%;
  @media (min-width: ${variables.mobileMax}) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: ${variables.desktopMin}) {
    display: block;
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
  margin-right: 20px
`;

export const ContactLink = styled.a`

`;

export const ContactFormWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  padding-top: 50px;

  @media (min-width: ${variables.desktopMin}) {
    padding-top: 150px;
  }
`;

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactFormTitle = styled.h3`
  color: ${variables.mainBg};
  font-size: 28px;
  padding-bottom: 15px;
  font-weight: 600;
`;

export const ContactFormContent = styled.form`
  display: flex;
  flex-direction: column;
`;
export const ContactFormData = styled.div`
  display: flex;

`;
export const ContactFormDataInput = styled.input`
  display: block;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #7C7B7B;
  width: 100%;
  margin: 5px 0 10px;
  font-size: 16px;
  @media (min-width: ${variables.mobileMax}) {
    max-width: 250px;
    margin: 15px 0 25px;
    padding: 15px;
  }
  @media (min-width: ${variables.wideScreenMin}) {
    max-width: 310px;
  }
`;

export const ContactFormMessage = styled.textarea`
  max-width: 100% !important;
  display: block;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #7C7B7B;
  width: 100%;
  margin: 5px 0 10px;
  font-size: 16px;
  @media (min-width: ${variables.mobileMax}) {
    max-width: 250px;
    margin: 15px 0 25px;
    padding: 15px;
  }
  @media (min-width: ${variables.wideScreenMin}) {
    max-width: 310px;
  }
`;
export const ContactFormLabel = styled.label`
  color: ${variables.secondFontColor};
  font-size: 14px;
  width: 100%;
  @media (min-width: ${variables.mobileMax}) {
    font-size: 22px;
  }
`;






