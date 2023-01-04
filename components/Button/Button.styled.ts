import styled from 'styled-components'

export const Btn = styled.button`
    display: inline-block;
    vertical-align: top;
    padding: 14px 35px;

    border-radius: 25px;
    border: 0;
    cursor: pointer;

    font-family: inherit;
    font-size: 25px;
    font-weight: 800;
    color: #776c64;
    text-transform: uppercase;
    text-decoration: none;

    transition: background 0.2s linear;
`

export const BtnWhite = styled(Btn)`
    background-color: #fff;
    &:hover {
        background-color: #e4e4e4;
    }
`

export const BtnBrown = styled(Btn)`
    background-color: rgba(112, 101, 90, 0.7);
    color: #fff;
    &:hover {
        background-color: rgba(80, 68, 58, 0.7); 
    }
`

export const BtnYellow = styled(Btn)`
    padding: 20px 80px;

    background-color: #e2a355;
    color: #fff;
    border-radius: 30px;
    &:hover {
        background-color: #cf862d
    }
`

export const TextCenter = styled.div`
    text-align: center;
`
