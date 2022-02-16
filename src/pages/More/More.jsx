import styled from "styled-components";

import React from "react";

import { 
    FooterLink,
    PurpleButton, 
    SectionTitle, 
    SectionText, 
    WrapperSubtitle 
} from '../../styles/Styles';

import { AnimatePresence } from "framer-motion";

import pageVariants from "../../PageTransition/PageVariants";
import pageTransition from "../../PageTransition/PageTransition";

import Partner1 from "../../assets/Icons/partner1.png";
import Partner2 from "../../assets/Icons/partner2.png";
import Partner3 from "../../assets/Icons/partner3.png";
import Partner4 from "../../assets/Icons/partner4.png";
import Partner5 from "../../assets/Icons/partner5.png";
import Partner6 from "../../assets/Icons/partner6.png";
import Map from "../../assets/Icons/map.png";
import Phone from "../../assets/Icons/phone.png";
import Facebook from "../../assets/Icons/facebook.png";
import Linkedin from "../../assets/Icons/linkedin.png";
import Twitter from "../../assets/Icons/twitter.png";
 
import { Link } from "react-router-dom";
import {
    WrapperSocial,
    SocialImg,
    WrapperContacts,
    WrapperContact,
    ContactText,
    ContactImg,
    MoreArticle,
    PartnerSection,
    PartnerDiv,
    Feature,
    FeatureTitle,
    WrapperFeatureTitle,
    Footer,
    WrapperFooter,
    WrapperLinks,
    FooterUl,
    FooterLi,
} from "./MoreStyles";

const More = () => {
    return (
        <>
            <AnimatePresence>
                <MoreArticle
                    initial="out"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}
                >
                    <PartnerSection>
                        <SectionTitle>Partners</SectionTitle>
                        <WrapperSubtitle>
                            <SectionText>
                                We focus on ergonomics and meeting you where you
                                work. It's only a keystroke away.
                            </SectionText>
                        </WrapperSubtitle>
                        <PartnerDiv>
                            <PartnerIcon src={Partner1} />
                            <PartnerIcon src={Partner2} />
                            <PartnerIcon src={Partner3} />
                            <PartnerIcon src={Partner4} />
                            <PartnerIcon src={Partner5} />
                            <PartnerIcon src={Partner6} />
                        </PartnerDiv>
                    </PartnerSection>
                    <Feature>
                        <WrapperFeatureTitle>
                            <FeatureTitle>
                                OpenType features and Variable fonts
                            </FeatureTitle>
                            <PurpleButton>Try For Free</PurpleButton>
                        </WrapperFeatureTitle>
                    </Feature>
                    <Footer>
                        <WrapperFooter>
                            <WrapperLinks>
                                <FooterUl>
                                    <FooterLi>
                                        <FooterLink
                                            as={Link}
                                            to="/landing-page-react"
                                        >
                                            Home
                                        </FooterLink>
                                        <FooterLink
                                            as={Link}
                                            to="/landing-page-react/product"
                                        >
                                            Product
                                        </FooterLink>
                                        <FooterLink
                                            as={Link}
                                            to="/landing-page-react/contents"
                                        >
                                            Contents
                                        </FooterLink>
                                        <FooterLink
                                            as={Link}
                                            to="/landing-page-react/gallery"
                                        >
                                            Gallery
                                        </FooterLink>
                                    </FooterLi>
                                </FooterUl>
                            </WrapperLinks>
                            <Contacts />
                        </WrapperFooter>
                    </Footer>
                </MoreArticle>
            </AnimatePresence>
        </>
    );
};

export default More;

export const PartnerIcon = styled.img.attrs((props) => ({ src: props.src }))`
    
`;

export function Contacts() {
    return (
        <>
            <WrapperContacts>
                <WrapperContact>
                    <Contact
                        icon="map"
                        text="7480 Mockingbird Hill undefined"
                    />
                </WrapperContact>
                <WrapperContact>
                    <Contact icon="phone" text="(239) 555-0108" />
                </WrapperContact>
            </WrapperContacts>
            <WrapperSocial>
                <Social icon="facebook" />
                <Social icon="twitter" />
                <Social icon="linkedin" />
            </WrapperSocial>
        </>
    );
}

export function Contact({ icon, ...props }) {
    const iconLib = {
        map: Map,
        phone: Phone,
    };
    return (
        <>
            <ContactImg src={iconLib[icon]} />
            <ContactText>{props.text}</ContactText>
        </>
    );
}

export function Social({ icon, ...props }) {
    const iconLib = {
        twitter: Twitter,
        facebook: Facebook,
        linkedin: Linkedin,
    };
    return (
        <>
            <SocialImg src={iconLib[icon]} />
        </>
    );
}