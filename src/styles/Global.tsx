import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        box-sizing: border-box;
        margin: 0;
    }

    html,body {
        overflow-x: hidden;
        overflow-y: scroll;
        ::-webkit-scrollbar{display: none;}
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        scrollbar-width: none; 
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
}

`