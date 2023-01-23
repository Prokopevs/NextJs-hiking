import React from "react"
import { IntroAfter, IntroInner, IntroSubtitle, IntroTitle } from "./Intro.styled"
import { Container } from "../Header/Header.styled"
import s from "../../styles/Link.module.css"

const Intro = React.forwardRef(
    (props, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
        return (
            <div className={s.intro} ref={ref}>
                <Container>
                    <IntroInner>
                        <IntroTitle>
                            IT´S TIME<br></br> FOR HIKING
                        </IntroTitle>
                        <IntroSubtitle>LOREMIPSUM DOLOR</IntroSubtitle>
                        <IntroAfter>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do iusmod tempor incididunt ut labore et dolore magna.
                        </IntroAfter>
                    </IntroInner>
                </Container>
            </div>
        )
    }
)

Intro.displayName = "Intro";

export default Intro
