import styled from 'styled-components'

export const InfoInner = styled.div`
    display: grid;
    gap: 30px 40px;
    grid-template-columns: repeat(3, 1fr);
    margin: 35px 0 20px 0;

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

export const InfoContent = styled.div`
    overflow: hidden;
    margin: 50px 0;
`

export const InfoTitle = styled.div`
    margin-bottom: 20px;
    text-align: center;
    font-size: 33px;
    color: #deb37e;
    font-weight: 700; 
    font-family: 'Open Sans';
    
    @media (max-width: 991px) {
        line-height: 1.1;
    }
`

export const InfoSubtitle = styled.div`
    font-size: 19px;
    color: #333d42;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    font-family: 'Open Sans';
`

