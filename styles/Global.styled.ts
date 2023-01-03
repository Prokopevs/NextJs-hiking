import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;

    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    color: #54524f;
    -webkit-font-smoothing: antialiased;

    background-color: #fff;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
    margin: 0;
    }

    a, u {
    text-decoration: none;
    }
`