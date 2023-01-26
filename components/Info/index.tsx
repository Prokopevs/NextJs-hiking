import React from "react"
import { IReview } from "../../models/IReview"
import { Container } from "../Header/Header.styled"
import { InfoContent, InfoInner, InfoSubtitle, InfoTitle } from "./Info.styled"

interface IInfo {
    array: IReview[]
}

const Info: React.FC<IInfo> = ({ array }) => {
    return (
        <Container>
            <InfoInner>
                {array.map((item: IReview) => (
                    <InfoContent key={item.id}>
                        <InfoTitle>{item.name}</InfoTitle>
                        <InfoSubtitle>{item.title}</InfoSubtitle>
                    </InfoContent>
                ))}
            </InfoInner>
        </Container>
    )
}

export default Info
