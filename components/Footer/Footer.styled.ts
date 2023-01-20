import styled from 'styled-components'

export const FooterMain = styled.footer`
    padding: 58px 0 20px 0;
    background-color: #7f7770;

    @media (max-width: 991px) { 
        padding: 58px 0 0 0;
    }
    @media (max-width: 575px) { 
        padding: 55px 0 0 0;
    }
`

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat';
    flex-wrap: wrap;
`

export const FooterInner = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat';
    flex-wrap: wrap;
`

export const FooterCol = styled.footer`
    overflow: hidden;
    padding: 0 10px 50px 50px;

    @media (max-width: 575px) { 
        padding: 0 0 50px 40px;
    }
`
export const FooterColFirst = styled(FooterCol)`
    width: 45%;
    @media (max-width: 991px) { 
        width: 60%;  
        padding-left: 40px;  
    }
    @media (max-width: 575px) { 
        width: 100%;  
        padding-right: 70px;  
    }
`
export const FooterColSecond = styled(FooterCol)`
    width: 20%;
    @media (max-width: 991px) { 
        width: 40%;
    }
    @media (max-width: 575px) { 
        width: 100%;   
    }
`
export const FooterColThird = styled(FooterCol)`
    width: 20%;
    @media (max-width: 991px) { 
        width: 60%;
        padding-left: 40px;   
    }
    @media (max-width: 575px) { 
        width: 100%;   
    }
`
export const FooterColFourth = styled(FooterCol)`
    width: 15%;
    @media (max-width: 991px) { 
        width: 40%;
    }
    @media (max-width: 575px) { 
        width: 100%;   
    }
`

export const FooterLogo = styled.div`
    margin-bottom: 30px;
    font-size: 31px;
    color: #fff;
    font-weight: 400;
    @media (max-width: 575px) { 
        margin-bottom: 17px;
    }
`

export const FooterText = styled.div`
    margin-bottom: 40px;

    font-size: 24px;
    color: #fff;
    font-weight: 400;
    line-height: 1.3;
    @media (max-width: 575px) { 
        margin-bottom: 35px; 
    }
`

export const FooterSocial = styled.div`
    display: flex;
`

export const SocialItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    margin-right: 16px;

    border-radius: 50%;
    background-color: #fff;
    transition: background-color 0.1s linear;
    &:hover {
        background-color: #6e655e;
    }
`

export const SocialItemPhoto = styled.img`
    height: 25px;
    cursor: pointer;
`

export const AboutCol = styled.div`
    display: block;
    text-decoration: none;

    color: #fff;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 575px) { 
        margin-bottom: 10px;
    }
`
