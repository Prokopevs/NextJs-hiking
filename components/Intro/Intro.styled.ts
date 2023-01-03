import styled from 'styled-components'

export const IntroStyled = styled.img`
    width: 100%;
    height: auto;
    max-height: 80%;
`

export const IntroInner = styled.div`
    width: 100%;
    max-width: 580px;
    padding-left: 20px;
    @media (max-width: 1200px) {
        width: 100%;
        max-width: 500px;
    }
`

export const IntroTitle = styled.h1`
    margin: 0 0 30px;

    font-size: 92px;
    line-height: 1.3;
    color: #e2a355;
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: 4px -4px 5px #dad9d4;
    @media (max-width: 1200px) {
        font-size: 80px;
    }
    @media (max-width: 991px) {
        font-size: 70px;
    } 
    @media (max-width: 767px) {
        font-size: 60px;
    } 
    @media (max-width: 575px) {
        font-size: 50px;
    } 
`

export const IntroSubtitle = styled.h2`
    margin-bottom: 26px;

    font-size: 25px;
    color: #54524f;
    font-style: italic;
    font-weight: 700;
    margin-left: 7px;
    @media (max-width: 991px) {
        font-size: 23px;
    } 
    @media (max-width: 767px) {
        font-size: 20px;
    } 
    @media (max-width: 575px) {
        font-size: 15px;
    } 
`

export const IntroAfter = styled.h2`
    margin: 25px 0 0 7px;

    font-size: 21px;
    color: #54524f;
    font-style: italic;
    font-weight: 400;
    @media (max-width: 1200px) {
        font-size: 20px;
        color: #54524f;
    } 
    @media (max-width: 991px) {
        font-size: 0;
        color: transparent;
    } 
`