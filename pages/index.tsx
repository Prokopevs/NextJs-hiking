import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { getTours } from "../Api/tours"
import Explore from "../components/Explore"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Info from "../components/Info"
import Intro from "../components/Intro"
import Motivation from "../components/Motivation"
import Mountains from "../components/Mountains"
import Quote from "../components/Quote"
import Works from "../components/Works"
import { IData } from "../models/IData"
import { GlobalStyle } from "../styles/Global.styled"

interface IHome {
    data: IData[]
}

const Home: React.FC<IHome> = ({ data }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    })
    return (
        <div>
            <GlobalStyle />
            <Header isFixed={!inView} />
            <Intro ref={ref} />
            <Motivation />
            <Features data={data} />
            <Works />
            <Mountains />
            <Explore />
            <Footer />
        </div>
    )
}

export default Home

export const getStaticProps = async () => {
    return getTours()
}
