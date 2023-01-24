import axios from "axios"
import React from "react"
import { Container } from "../../components/Header/Header.styled"
import { IData } from "../../models/IData"
import {
    CarouselImg,
    CarouselInner,
    TourGetBack,
    TourHeader,
    TourInner,
    TourSubtitle,
    TourText,
    TourTitle,
} from "../../styles/tour.styled"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import getBack from "../../public/intro/return.png"
import Link from "next/link"
import s from "../../styles/Link.module.css"
import { useRouter } from "next/router"

interface ITour {
    data: IData
}
type IParams = {
    tourId: string
}

const Tour: React.FC<ITour> = ({ data }) => {

    return (
        <Container>
            <TourInner>
                <TourHeader>
                    <Link scroll={false} href="/tours" className={s.get__back}>
                        <TourGetBack
                            width="40px"
                            height="40px"
                            src={getBack.src}
                        ></TourGetBack>
                    </Link>

                    <TourTitle>{data.title}</TourTitle>
                </TourHeader>
                <TourSubtitle>{data.subtitle}</TourSubtitle>
                <div>
                    <Carousel emulateTouch showStatus={false} showThumbs={false}>
                        {data.photo.map((item, index) => (
                            <>
                                <CarouselInner key={index}>
                                    <CarouselImg src={item}></CarouselImg>
                                </CarouselInner>
                            </>
                        ))}
                    </Carousel>
                </div>
                <TourText>{data.text}</TourText>
            </TourInner>
        </Container>
    )
}

export default Tour

export const getStaticPaths = async () => {
    const response = await axios.get("https://635eccd803d2d4d47af65e4d.mockapi.io/tours")
    const data = response.data

    const paths = data.map((tour: IData) => {
        return {
            params: {
                tourId: `${tour.id}`,
            },
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: { params: IParams }) => {
    const { params } = context
    try {
        const response = await axios.get(
            `https://635eccd803d2d4d47af65e4d.mockapi.io/tours/${params.tourId}`
        )
        const data = response.data
        return {
            props: {
                data,
            },
        }
    } catch (error) {
        console.log(error)
    }
}
