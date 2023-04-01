import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: #13131f;
    }

    button{
        cursor: pointer;
    }

    a{
        color: unset;
        text-decoration: none;
        cursor: pointer;
    }

    ul, ol, li{
        list-style: none;
    }
    html {
  scroll-behavior: smooth;
}

    :root {
        --color-primary:   #a62533;
        --color-secondary: #B33F00;
        --color-negative:  #E60000;

        --color-grey-100:  #212529;
        --color-grey-200:  #343B41;
        --color-grey-300:  #868E96;
        --color-grey-400:  #828282;
        --color-grey-500:  #aaa;
        --color-grey-600:  #E0E0E0;
        --color-grey-700:  #e9ecef;
        --color-grey-800:  #F5F5F5;
        --color-white:     #FFFFFF;
        --color-black:     #000000;

        --color-overlay-black: rgba(0,0,0,.5);
        

        --font-size-32: 2rem;
        --font-size-30: 1.875rem;
        --font-size-28: 1.75rem;
        --font-size-24: 1.5rem;
        --font-size-20: 1.25rem;
        --font-size-18: 1.125rem;
        --font-size-16: 1rem;
        --font-size-14: 0.875rem;
        --font-size-12: 0.75rem;

        --radius-1: 0.5rem;
        --radius-2: 0.25rem;
        --radius-50:50%;
    }
`;
