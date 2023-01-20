import React from "react"
import { Container } from "../../components/Header/Header.styled"
import {
    FeaturesInner,
    Show,
    ShowBlock,
    ShowContent,
    ShowImg,
    ShowSubtitle,
    ShowTitle,
    ToursInner,
    ToursSubtitle,
    ToursTitle,
} from "../../components/Features/Features.styled"
import { getTours } from "../../Api/tours"

const Features = (props: any) => {
    return (
        <Container>
            <ToursInner>
                <ToursTitle>Tours</ToursTitle>
                <ToursSubtitle>Find the best tour for you</ToursSubtitle>
            </ToursInner>
            <FeaturesInner>
                {props.data.map((item: any) => (
                    <Show key={item.id}>
                        <ShowBlock>
                            <ShowImg src={item.photo} alt=""></ShowImg>
                        </ShowBlock>
                        <ShowContent>
                            <ShowTitle>{item.title}</ShowTitle>
                            <ShowSubtitle>{item.subtitle.substring(0, 115)+"..."}</ShowSubtitle>
                        </ShowContent>
                    </Show>
                ))}
            </FeaturesInner>
        </Container>
    )
}

export default Features

export const getStaticProps = async () => {
    return getTours()
}
