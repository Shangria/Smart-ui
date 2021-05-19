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
import {contactData} from "./ContactData";
import ContactForm from "./ConactForm";

const Contact = () => {
    return (
        <ContactWrapper id='contactUs'>
            <ContactBox>
                <ContactTitle>Contact</ContactTitle>
                <ContactContent>
                    <ContactAddressContainer>
                        <ContactAddressBox>
                            <ContactSubTitle>Our address</ContactSubTitle>
                            <ContactInfoAddress>{contactData.contactInfoCity}</ContactInfoAddress>
                            <ContactInfoAddress>{contactData.contactInfoAve}</ContactInfoAddress>
                            <ContactInfoAddress>{contactData.contactInfoWD}</ContactInfoAddress>
                            <ContactInfoAddress>{contactData.contactInfoWeekend}</ContactInfoAddress>
                        </ContactAddressBox>
                        <ContactLinksWrap>
                            <ContactLinks>
                                <ContactIcon src={contactData.upWorkLogo} alt={contactData.altUpWork}></ContactIcon>
                                <ContactLink href={contactData.upWorkContact}>{contactData.upWorkContact}</ContactLink>
                            </ContactLinks>
                            <ContactLinks>
                                <ContactIcon src={contactData.linkedInLogo} alt={contactData.altLinkd}></ContactIcon>
                                <ContactLink href={contactData.linkedInContact}>{contactData.linkedInContact}</ContactLink>
                            </ContactLinks>
                            <ContactLinks>
                                <ContactIcon src={contactData.phoneLogo} alt={contactData.altPhone}></ContactIcon>
                                <ContactLink href={`tel:${contactData.phoneContact}`}>{contactData.phoneContact}</ContactLink>
                            </ContactLinks>
                            <ContactLinks>
                                <ContactIcon src={contactData.mailLogo} alt={contactData.altMail}></ContactIcon>
                                <ContactLink href={`mailto:${contactData.mailContact}`}>{contactData.mailContact}</ContactLink>
                            </ContactLinks>
                        </ContactLinksWrap>
                    </ContactAddressContainer>
                    <ContactFormWrapper>
                        <ContactFormContainer>
                            <ContactFormTitle>Contact form</ContactFormTitle>
                            <ContactForm/>
                        </ContactFormContainer>
                    </ContactFormWrapper>
                </ContactContent>
            </ContactBox>

        </ContactWrapper>
    );
};

export default Contact;