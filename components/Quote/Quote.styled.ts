import styled from 'styled-components'

export const MainQuote = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

export const QuotePhoto = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
`

export const QuoteInner = styled.div`
    padding: 100px 0;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`

export const QuoteTitle = styled.h1`
    margin-bottom: 40px;
    font-family: 'Open Sans';
    font-size: 100px;
    color: #54524f;
    font-weight: 700;
    line-height: 0.5;
`

export const QuoteSubtitle = styled.h2`
    margin-bottom: 40px;
    font-family: 'Open Sans';
    font-size: 25px;
    color: #54524f;
    font-weight: 700;
`

export const QuoteSubhead = styled.h1`
    font-size: 21px;
    color: #54524f;
    font-weight: 700;
    font-family: 'Open Sans';
`
