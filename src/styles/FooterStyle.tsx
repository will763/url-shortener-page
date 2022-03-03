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

    @media screen and (min-width: 768px) {
     padding: 3em 10% 3.5em;
     flex-direction: row;
     justify-content: space-between;
     align-items: flex-start;

     .logo {
        margin-top: 0;
        margin-right: 5%;
    }

     .informations {
         font-size: .8em;
         display: flex;
         width: 40%;
         justify-content: space-between;
     }

     .informations .headers {
        margin: 0;
        text-align: left;
        align-items: flex-start;
    }

    .informations .headers h5 {
        margin-bottom: .5em;
    }

    .social-icons {
        margin: 0 0 0 2%;
        width: 9.5rem;
    }
     
}

@media screen and (min-width: 1048px){
    .informations {
         font-size: 1em;
         display: flex;
         width: 40%;
         justify-content: space-between;
     }

     .logo {
        margin-right: 0%;
    }

    .social-icons {
        margin: 0;
    }
}
`