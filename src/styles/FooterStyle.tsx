import styled from "styled-components";


export const FooterStyle = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: hsl(255, 11%, 22%);

    .logo {
        margin-top: 1.8em;
    }

    .logo svg {
        cursor: pointer;
    }

    .logo svg path{
       fill: white;
    }

    .informations .headers {
        margin: 1.6em 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .informations .headers h5 {
        color: white;
        font-weight: 700;
        font-size: .7em;
        margin-bottom: .8em;
        cursor: pointer;
    }
    .informations .headers ul {
        list-style: none;
        color: hsl(0, 0%, 75%);
        font-weight: 500;
        font-size: .7em;
    }

    .informations .headers ul li{
        margin: .5em 0;
        cursor: pointer;
        transition: color .2s;
    }

    .informations .headers ul li:hover{
        color: hsl(180, 66%, 49%);
    }

    .social-icons {
        margin: 1em 0 2.5em;
    }

    .social-icons svg{
        margin: 0 .5em;
        cursor: pointer;
    }
    .social-icons svg:hover path{
        transition: fill .28s;
    }

    .social-icons svg:hover path{
        fill:hsl(180, 66%, 49%);
    }
`