import React from "react"
import axios from 'axios';
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

const Features:React.FC<any> = ({data}) => {
    return (
        <div className={s.features}>
            <Container>
                <FeaturesInner>
                    {data.slice(3).map((item: any) => (
                        <Show key={item.id}>
                            <ShowBlock>
                                <ShowImg src={item.photo} alt=""></ShowImg>
                            </ShowBlock>
                            <ShowContent>
                                <ShowTitle>{item.title}</ShowTitle>
                                <ShowSubtitle>
                                    {item.subtitle.substring(0, 115) + "..."}
                                </ShowSubtitle>
                            </ShowContent>
                        </Show>
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

