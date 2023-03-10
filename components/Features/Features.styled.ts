import styled from 'styled-components'

export const FeaturesInner = styled.div`
    display: grid;
    gap: 30px 40px;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1350px) {
        gap: 30px 30px;
        padding: 0 30px;
    }

    @media (max-width: 991px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 80px;
    }

    @media (max-width: 767px) {
        padding: 0 50px;
    }

    @media (max-width: 575px) {
        padding: 0 30px;
    }

    @media (max-width: 420px) {
        padding: 0 10px;
    }
`

export const Show = styled.div`
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0,0,0,0.25);
    transition: box-shadow 0.2s linear;
    background: rgba(112, 101, 90, 0.7);
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 25px rgba(0,0,0,0.25);
    }
`

export const ShowBlock = styled.div`
    overflow: hidden;
`

export const ShowImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
    }
`

export const ShowContent = styled.div`
    padding: 15px 24px 25px;
    height: 100%;

    @media (max-width: 575px) {
        padding: 7px 15px 12px;
    }
`

export const ShowTitle = styled.div`
    margin-bottom: 20px;
    font-size: 29px;
    color: #fff;
    font-weight: 700;
    font-family: 'Open Sans';
    text-decoration: none;
`

export const ShowSubtitle = styled.div`
    font-size: 21px;
    color: #fff;
    font-weight: 400;
    line-height: 1.1;
    font-family: 'Open Sans';
    text-decoration: none;
`

export const FeaturesBtn = styled.div`
    padding: 50px 0 80px;
`

export const ToursStyled = styled.div`
    margin-bottom: 40px;
`

export const ToursInner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
`

export const ToursTitle = styled.h1`
    font-size: 50px;
    color: #0baf52;
    font-weight: 700;
    font-family: 'Open Sans';
    margin: 0;
    margin-right: auto;
    @media (max-width: 575px) {
        font-size: 40px;
    }
`

export const ToursSubtitle = styled.h3`
    font-size: 33px;
    color: #0baf52;
    font-weight: 600;
    font-family: 'Open Sans';
    margin: 0 0 8px 0;
    text-align: center;
    @media (max-width: 575px) {
        font-size: 28px;
    }
`
