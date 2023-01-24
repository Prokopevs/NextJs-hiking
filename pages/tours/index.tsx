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
    ToursStyled,
    ToursSubtitle,
    ToursTitle,
} from "../../components/Features/Features.styled"
import { getTours } from "../../Api/tours"
import { IData } from "../../models/IData"
import Link from "next/link"
import { TourGetBack, TourHeader } from "../../styles/tour.styled"
import getBack from "../../public/intro/return.png"
import s from "../../styles/Link.module.css"

interface ITours {
    data: IData[]
}
const Tours: React.FC<ITours> = ({ data }) => {
    return (
        <Container>
            <ToursStyled>
                <ToursInner>
                    <TourHeader>
                        <Link scroll={false} href="/" className={s.get__back}>
                            <TourGetBack
                                src={getBack.src}
                                width="40px"
                                height="40px"
                            ></TourGetBack>
                        </Link>
                        <ToursTitle>Tours</ToursTitle>
                    </TourHeader>
                    <ToursSubtitle>Find the best tour for you</ToursSubtitle>
                </ToursInner>

                <FeaturesInner>
                    {data.map((item: IData) => (
                        <Link
                            scroll={false}
                            href={`tours/${item.id}`}
                            key={item.id}
                            style={{ textDecoration: "none" }}
                        >
                            <Show>
                                <ShowBlock>
                                    <ShowImg src={item.photo[0]} alt=""></ShowImg>
                                </ShowBlock>
                                <ShowContent>
                                    <ShowTitle>{item.title}</ShowTitle>
                                    <ShowSubtitle>
                                        {item.subtitle.substring(0, 115) + "..."}
                                    </ShowSubtitle>
                                </ShowContent>
                            </Show>
                        </Link>
                    ))}
                </FeaturesInner>
            </ToursStyled>
        </Container>
    )
}

export default Tours

export const getStaticProps = async () => {
    return getTours()
}
