import styled from 'styled-components';
import {contactData} from "./ContactData";
import {variables} from "../../Variables";

export const ContactWrapper = styled.section`
  position: relative;
  padding: 8% 0;
  background-image: url(${contactData.bg2}), url(${contactData.bg1});
  //background-image: url('../img/bg-5.png'), url('../img/bg-4.png');
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const ContactContent = styled.div`
  display: flex;
  max-width: 1310px;
  padding: 0 15px;
  width: 100%;
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
  @media screen and(min-width: ${variables.mobileMax}) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and(min-width: ${variables.desktopMin}) {
    display: block;
  }
`;
export const ContactSubTitle = styled.h4`
  color: ${variables.accentColor};
  font-size: 28px;
  padding-bottom: 15px;
  font-weight: 600;

  @media screen and(min-width: ${variables.mobileMax}) {
    font-size: 36px;
    padding-bottom: 30px;
  }
`;

export const ContactInfoAddress = styled.address`
  padding-bottom: 5px;
  font-style: normal;
  line-height: 30px;
  @media screen and(min-width: ${variables.mobileMax}) {
    padding-bottom: 15px;
  }
`;

export const ContactLinksWrap = styled.div`
  padding: 30px 0;
  @media screen and(min-width: ${variables.mobileMax}) {
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



