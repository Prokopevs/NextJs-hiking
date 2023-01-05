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
        padding: 0 150px;
    }

    @media (max-width: 767px) {
        padding: 0 100px;
    }

    @media (max-width: 575px) {
        padding: 0 50px;
    }

    @media (max-width: 420px) {
        padding: 0 30px;
    }
`

export const Show = styled.div`
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0,0,0,0.25);
    transition: box-shadow 0.2s linear;
    background: rgba(112, 101, 90, 0.7);

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
`

export const ShowTitle = styled.div`
    margin-bottom: 20px;
    font-size: 29px;
    color: #fff;
    font-weight: 700;
`

export const ShowSubtitle = styled.div`
    font-size: 21px;
    color: #fff;
    font-weight: 400;
    line-height: 1.1;
`

export const FeaturesBtn = styled.div`
    padding: 50px 0 80px;
`
