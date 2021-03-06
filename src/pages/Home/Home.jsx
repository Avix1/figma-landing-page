import React from "react";

import { 
    WrapperSubtitle,
    SectionText,
    PurpleButton,
    BlackButton
} from "../../styles/Styles";

import { AnimatePresence } from "framer-motion";

import pageVariants from "../../PageTransition/PageVariants";
import pageTransition from "../../PageTransition/PageTransition";

import {
    HomeSection,
    WrapperDiv,
    WrapperMainTitle,
    MainTitle,
    WrapperButton,
} from "./HomeStyles";

function Home() {
    return (
        <>
            <AnimatePresence>
                <HomeSection
                    initial="out"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                    variants={pageVariants}
                >
                    <WrapperDiv>
                        <WrapperMainTitle>
                            <MainTitle>Work at the speed of thought</MainTitle>
                        </WrapperMainTitle>
                        <WrapperSubtitle>
                            <SectionText>
                                Most calendars are designed for teams. Slate is
                                designed for freelancers who want a simple way
                                to plan their schedule.
                            </SectionText>
                        </WrapperSubtitle>
                        <WrapperButton>
                            <PurpleButton>Try For Free</PurpleButton>
                            <BlackButton>Learn More</BlackButton>
                        </WrapperButton>
                    </WrapperDiv>
                </HomeSection>
            </AnimatePresence>
        </>
    );
}

export default Home;