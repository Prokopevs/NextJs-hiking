import styled from 'styled-components'

export const Mountain = styled.div`
    background-color: #99928d;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;
`

export const MountainsPhoto = styled.img`
    position: absolute;
    top: 10%;
    left: 0;
    z-index: 1;
    @media (max-width: 991px) { 
        top: -5%;
    }
`

export const MountainsInner = styled.div`
    padding: 180px 0;
    max-width: 920px;
    width: 100%;
    margin: 0 auto;
    height: 500px;
    @media (max-width: 991px) { 
        padding: 150px 0;
    }
    @media (max-width: 767px) { 
        padding: 150px 0;
    }
    @media (max-width: 575px) { 
        padding: 100px 0;
    }
`

export const MountainsTest = styled.div`
    position: absolute;
    margin: 0 auto;
    top: 0; 
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;

    max-width: 920px;
`

export const MountainsTitle = styled.h1`
    margin: 100px 0 45px 0;

    font-size: 58px;
    color: #fff;
    font-weight: 700;
    @media (max-width: 991px) { 
        margin: 140px 0 40px 0;
        font-size: 54px;
    }
    @media (max-width: 767px) { 
        margin: 140px 0 40px 0;
        font-size: 47px;
    }
    @media (max-width: 575px) { 
        margin: 80px 0 40px 0;
        font-size: 45px;
    }
`

export const MountainsSubtitle = styled.h2`
    font-size: 29px;
    color: #fff;
    font-weight: 400;
    padding: 0 20px;
    @media (max-width: 991px) { 
        font-size: 24px;
    }
    @media (max-width: 767px) { 
        font-size: 22px;
    }
    @media (max-width: 575px) { 
        font-size: 20px;
    }
`