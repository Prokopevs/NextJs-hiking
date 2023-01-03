import styled from 'styled-components'

export const MotivationInner = styled.div`
    padding: 40px 0 60px 0;
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
`

export const MotivationTitle = styled.h1`
    font-size: 63px;
    color: #e2a355;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 40px;
    @media (max-width: 991px) { 
        font-size: 60px;
    }
    @media (max-width: 776px) { 
        font-size: 55px;
    }
    @media (max-width: 575px) { 
        font-size: 50px;
        margin-bottom: 10px;
    }
`

export const MotivationSubtitle = styled.h2`
    font-size: 27px;
    color: #7f7770;
    font-weight: 400;
    text-align: center;
    @media (max-width: 991px) { 
        font-size: 24px;
    }
    @media (max-width: 776px) { 
        font-size: 21px;
    }
    @media (max-width: 575px) { 
        font-size: 18px;
    }
`