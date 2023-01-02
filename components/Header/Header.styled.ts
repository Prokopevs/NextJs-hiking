import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    height: 130px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
`

export const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 15px 30px 15px;
`

export const HeaderIMG = styled.img`
    width: 71px;
    height: 74px;
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
