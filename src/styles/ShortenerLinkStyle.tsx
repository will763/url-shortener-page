import styled from "styled-components";


export const ShortenerLinkStyle = styled.section`
    background-image:linear-gradient( white 50%, hsla(0, 0%, 75%,.2) 50%);
    height: 8em;
    display: flex;
    justify-content: center;

    .shortener-input {
        padding: 1.3rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: .5rem;
        width: 90%;
        height: 100%;
        background-color: hsl(257, 27%, 26%);
        background-image: url('/images/bg-shorten-mobile.svg');
        background-repeat: no-repeat;
        background-position: 100% 0;
    }

    .shortener-input .input-container{
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .shortener-input .input-container .warning {
        display: none;
        margin-top: .2em;
        margin-bottom: .5em;
        color: hsl(0, 87%, 67%);
        align-self: flex-start;
        font-size: .6em;
    }

    .shortener-input .input-container input {
        color: gray;
        padding-left: 1.3em;
        border: none;
        width: 100%;
        height: 2.2rem;
        border-radius: .2rem;
    }

    .shortener-input  button {
        border: none;
        width: 90%;
        height: 2.2rem;
        border-radius: .2rem;
        font-weight: 700;
        color: white;
        background-color: hsl(180, 66%, 49%);
        font-size: .8em;
        cursor: pointer;
        transition: filter .28s;
    }

    .shortener-input  button:hover {
        filter: brightness(115%);
    }

    .shortener-input .input-container input:focus {
        outline: 2px solid hsl(0, 87%, 67%);
    }

    .shortener-input .input-container input:focus::placeholder {
        color:hsl(0, 87%, 67%);
    }
    
`