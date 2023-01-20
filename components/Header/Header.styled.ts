import styled from 'styled-components'

type TStyledHeader = {
    isFixed: boolean;
};

export const StyledHeader = styled.header<TStyledHeader>`
    width: 100%;

    position: ${(props: any) => props.isFixed ? "fixed" : "absolute"};
    height: ${(props: any) => props.isFixed ? "90px" : "90px"};
    background-color: ${(props: any) => props.isFixed ? "#e9e6e3" : ""};
    top: 0;
    left: 0;
    z-index: 1000;

    transform: translateY(-150%);
    animation: ani 0.7s forwards;

    @keyframes ani {
    0% {transform: translateY(-150%);}
    100% {transform: translateY(0);}
}
`

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
`

export const HeaderInner = styled.div<TStyledHeader>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props: any) => props.isFixed ? "8px 30px 0px 30px" : "30px 15px 30px 15px"};
`

export const HeaderIMG = styled.img<TStyledHeader>`
    width: ${(props: any) => props.isFixed ? "71px" : ""};
    height: ${(props: any) => props.isFixed ? "74px" : ""};
    @media (max-width: 575px) {
        width: 81px;
        height: 84px;
    }
`

export const Nav = styled.nav`
    display: flex;
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
`
