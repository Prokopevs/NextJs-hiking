import styled from 'styled-components'

export const Work = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const WorksItem = styled.div`
    width: 50%;
    height: 700px;
    position: relative;
    overflow: hidden;
    @media (max-width: 991px) { 
        width: 100%;
        height: 673px;
    }
    @media (max-width: 776px) { 
        height: 600px;
    }
    @media (max-width: 575px) { 
        height: 515px;
    }
`

export const WorksPhoto = styled.img`
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate3d(-50%, -50%, 0);
    display: block;
`

export const WorksMove1 = styled(WorksPhoto)`
    transform: translate3d(-50%, -50%, 0);
    @media (max-width: 575px) { 
        transform: translate3d(-60%, -50%, 0);
    }   
`

export const WorksMove2 = styled(WorksPhoto)`
    transform: translate3d(-50%, -50%, 0);
    @media (max-width: 991px) { 
        transform: translate3d(-50%, -59%, 0);
    } 
`

export const WorksContent = styled.div`
    padding: 50px 20px 0 60px;

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    @media (max-width: 991px) { 
        padding: 60px 0 0 60px; 
    }
    @media (max-width: 575px) { 
        padding: 40px 0 0 40px;
    }
    background-color: #eab676;

`

export const WorksContentRight = styled(WorksContent)`
    padding: 50px 60px 0 20px;
    @media (max-width: 991px) { 
        padding: 60px 60px 0 0px;
    }
    @media (max-width: 575px) { 
        padding: 40px 40px 0 0px;
    }
`

export const WorksInner = styled.div`
    width: 100%;
    max-width: 550px;
`

export const WorksInnerRight = styled(WorksInner)`
    margin-left: auto;
    margin-right: 0;

    text-align: right;
`

export const WorksTitle = styled.div`
    margin-bottom: 50px;
    font-size: 58px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1200px) { 
        font-size: 54px;
    }
    @media (max-width: 991px) { 
        font-size: 58px;
    }
    @media (max-width: 776px) { 
        font-size: 54px;
    }
    @media (max-width: 575px) { 
        margin-bottom: 30px;
        font-size: 45px;
        line-height: 1.1;
    }
`

export const WorksText = styled.div`
    margin-bottom: 57px;
    font-size: 29px;
    color: #fff;
    font-weight: 400;
    @media (max-width: 1200px) { 
        font-size: 24px;
    }
    @media (max-width: 991px) { 
        font-size: 29px;
    }
    @media (max-width: 776px) { 
        font-size: 25px;
    }
    @media (max-width: 575px) { 
        margin-bottom: 30px;
        font-size: 20px;
    }
`