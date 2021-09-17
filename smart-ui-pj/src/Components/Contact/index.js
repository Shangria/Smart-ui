import React from "react";
import {
  ContactWrapper,
  ContactIcon,
  ContactAddressContainer,
  ContactInfoAddress,
  ContactLink,
  ContactLinks,
  ContactLinksWrap,
  ContactSubTitle,
  ContactTitle,
  ContactContent,
  ContactFormContainer,
  ContactFormWrapper,
  ContactFormTitle,
  ContactBox,
  ContactAddressBox,
} from "./ContactElements";
import { contactData } from "./ContactData";
import ContactForm from "./ConactForm";
import { variables } from '../../Variables';

const Contact = () => {
  return (
    <ContactWrapper id="contactUs">
      <ContactBox>
        <ContactTitle>Contact</ContactTitle>
        <ContactContent>
          <ContactAddressContainer>
            <ContactAddressBox>
              <ContactSubTitle>Our address</ContactSubTitle>
              <ContactInfoAddress>
                {contactData.contactInfoCity}
              </ContactInfoAddress>
              <ContactInfoAddress>
                {contactData.contactInfoAve}
              </ContactInfoAddress>
              <ContactInfoAddress>
                {contactData.contactInfoWD}
              </ContactInfoAddress>
              <ContactInfoAddress>
                {contactData.contactInfoWeekend}
              </ContactInfoAddress>
            </ContactAddressBox>
            <ContactLinksWrap>
              <ContactLinks>
                <ContactLink href={variables.UPWORK_LINK} target="_blank">
                  <ContactIcon src={contactData.upWorkLogo} alt={contactData.altUpWork} />
                  <span>{contactData.altUpWork}</span>
                </ContactLink>
              </ContactLinks>
              <ContactLinks>
                <ContactLink href={variables.LINKEDIN_LINK} target="_blank">
                  <ContactIcon src={contactData.linkedInLogo} alt={contactData.altLinkd} />
                  <span>{contactData.altLinkd}</span>
                </ContactLink>
              </ContactLinks>
              <ContactLinks>
                <ContactLink href={`tel:${contactData.phoneContact}`}>
                <ContactIcon src={contactData.phoneLogo} alt={contactData.altPhone} />
                  <span>{contactData.phoneContact}</span>
                </ContactLink>
              </ContactLinks>
              <ContactLinks>
                <ContactLink href={`mailto:${contactData.mailContact}`}>
                <ContactIcon src={contactData.mailLogo} alt={contactData.altMail} />
                  <span>{contactData.mailContact}</span>
                </ContactLink>
              </ContactLinks>
            </ContactLinksWrap>
          </ContactAddressContainer>
          <ContactFormWrapper>
            <ContactFormContainer>
              <ContactFormTitle>Contact form</ContactFormTitle>
              <ContactForm />
            </ContactFormContainer>
          </ContactFormWrapper>
        </ContactContent>
      </ContactBox>
    </ContactWrapper>
  );
};

export default Contact;
