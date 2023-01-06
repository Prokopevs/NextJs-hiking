import React from "react"
import { Container } from "../Header/Header.styled"
import { InfoContent, InfoInner, InfoSubtitle, InfoTitle } from "./Info.styled"

const Info = () => {
    return (
        <Container>
            <InfoInner>
                <InfoContent>
                    <InfoTitle>Lorem ipsum</InfoTitle>
                    <InfoSubtitle>
                        Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
                        tation omne ullamco laboris nisi ut aliqolore.
                    </InfoSubtitle>
                </InfoContent>

                <InfoContent>
                    <InfoTitle>Lorem ipsum</InfoTitle>
                    <InfoSubtitle>
                        Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
                        tation omne ullamco laboris nisi ut aliqolore.
                    </InfoSubtitle>
                </InfoContent>

                <InfoContent>
                    <InfoTitle>Lorem ipsum</InfoTitle>
                    <InfoSubtitle>
                        Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
                        tation omne ullamco laboris nisi ut aliqolore.
                    </InfoSubtitle>
                </InfoContent>
            </InfoInner>
        </Container>
    )
}

export default Info
