import React from "react";

import { AnimatePresence } from "framer-motion";

import pageTransition from "../../PageTransition/PageTransition";
import pageVariants from "../../PageTransition/PageVariants";

import MacBookImg from "../../assets/Macbook.png";
import BoardsImg from "../../assets/Boards.png";

import { 
    WrapperSubtitle, 
    PurpleButton, 
    SectionTitle, 
    SectionText 
} from '../../styles/Styles';

import {
    AboutSection,
    Card,
    TitleCard,
    TextCard,
    WrapperTextCard,
    CardImg,
    WrapperCard,
} from "./ContentStyles";

const Contents = () => {
    return (
        <>
            <AnimatePresence>
                <AboutSection
                    initial="out"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}
                >
                    <SectionTitle>Contents</SectionTitle>

                    <WrapperSubtitle>
                        <SectionText>
                            We focus on ergonomics and meeting you where you
                            work. It's only a keystroke away.
                        </SectionText>
                    </WrapperSubtitle>

                    <WrapperCard>
                        <MainCard
                            img="mac"
                            title="Work"
                            text="Ever wondered if you're too reliant on a client for
                        work? Slate helps you identify."
                            button="Sign Up"
                        />

                        <MainCard
                            img="boards"
                            title="Design with real data"
                            text="Ever wondered if you're too reliant on a client for work? Slate helps you identify."
                            button="Try For Free"
                        />
                    </WrapperCard>
                </AboutSection>
            </AnimatePresence>
        </>
    );
};

export default Contents;

export function MainCard({ img, ...props }) {
    const imgLib = {
        mac: MacBookImg,
        boards: BoardsImg,
    };
    return (
        <>
            <Card>
                <WrapperTextCard>
                    <TitleCard>{props.title}</TitleCard>
                    <TextCard>{props.text}</TextCard>
                </WrapperTextCard>
                <PurpleButton>{props.button}</PurpleButton>

                <CardImg src={imgLib[img]} />
            </Card>
        </>
    );
}