import React from "react"
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
import img1 from "../../public/features/1.jpg"
import img2 from "../../public/features/2.jpg"
import img3 from "../../public/features/3.jpg"
import { BtnBrown, TextCenter } from "../Button/Button.styled"

const Features = () => {
    return (
        <div className={s.features}>
            <Container>
                <FeaturesInner>
                    <Show>
                        <ShowBlock>
                            <ShowImg src={img1.src} alt=""></ShowImg>
                        </ShowBlock>
                        <ShowContent>
                            <ShowTitle>Lorem ipsum</ShowTitle>
                            <ShowSubtitle>
                                Lorem ipsum dolor sit amet, consectetur fdsa f sad f fasd
                                fdsa fds afdsa ftgerth rfd hsdfh fdh
                            </ShowSubtitle>
                        </ShowContent>
                    </Show>

                    <Show>
                        <ShowBlock>
                            <ShowImg src={img2.src} alt=""></ShowImg>
                        </ShowBlock>
                        <ShowContent>
                            <ShowTitle>Lorem ipsum</ShowTitle>
                            <ShowSubtitle>
                                Lorem ipsum dolor sit amet, consecteturdfsafds dfas f fdsa
                                hdfs hfdsh dfs terahrt hjtsrer sfgsfd h fd.
                            </ShowSubtitle>
                        </ShowContent>
                    </Show>

                    <Show>
                        <ShowBlock>
                            <ShowImg src={img3.src} alt=""></ShowImg>
                        </ShowBlock>
                        <ShowContent>
                            <ShowTitle>Lorem ipsum</ShowTitle>
                            <ShowSubtitle>
                                Lorem ipsum dolor sit amet, consectetu fdsa fsd fds afsda
                                hdfs hdfsh fds hdsf jrtgsh df shsdf
                            </ShowSubtitle>
                        </ShowContent>
                    </Show>
                </FeaturesInner>

                <FeaturesBtn>
                    <TextCenter>
                        <BtnBrown>Show more</BtnBrown>
                    </TextCenter>
                </FeaturesBtn>
            </Container>
        </div>
    )
}

export default Features
