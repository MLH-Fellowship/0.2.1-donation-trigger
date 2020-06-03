import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        box-sizing: border-box;

       /* Gloabl variables here */
       --color-main: ${({ theme }) => theme.colors.main}
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    ::selection {
        background: #70BCFF; /* WebKit/Blink Browsers */
    }

    ::-moz-selection {
        background: #70BCFF; /* Gecko Browsers */
    }

    a, 
    input, 
    textarea,
    button {
        outline: none;
        text-decoration: none;
        font-family: inherit;
    }
`;
