import React from "react"
import axios from "axios"
import { Container } from "../Header/Header.styled"
import s from "../../styles/Link.module.css"
import {
    FeaturesBtn,
    FeaturesInner,
    Show,
    ShowBlock,
    ShowContent,
    ShowImg,
    ShowSubtitle,
    ShowTitle,
} from "./Features.styled"
import { BtnBrown, TextCenter } from "../Button/Button.styled"
import Link from "next/link"
import { IData } from "../../models/IData"

interface IFeatures {
    data: IData[]
}

const Features: React.FC<IFeatures> = ({ data }) => {
    return (
        <div className={s.features}>
            <Container>
                <FeaturesInner>
                    {data.slice(0, 3).map((item: IData, index: number) => (
                        <Link href={`tours/${item.id}`} key={item.id}>
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

                <FeaturesBtn>
                    <TextCenter>
                        <Link href="/tours">
                            <BtnBrown>Show more</BtnBrown>
                        </Link>
                    </TextCenter>
                </FeaturesBtn>
            </Container>
        </div>
    )
}

export default Features
