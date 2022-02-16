import { createGlobalStyle }from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --first: #4452fe;
    --second: #ffffff;
    --dark: #181818;
    --light: #ffffffb2;
    --grey: #5C5C5C;
    --darkGrey: #343434;
    --darkGreySecond: #1E1E1E;
}

body {
        background-color: var(--dark);
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 100%;

        @media (max-width: 480px) {
            overflow-x: hidden;
        }
    }
`;

export default GlobalStyle;