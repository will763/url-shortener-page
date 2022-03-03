import styled from "styled-components";

export const SampleStyle = styled.div`
    height: 15.5em;
    background-color: hsl(257, 27%, 26%);
    background-image: url('/images/bg-boost-mobile.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    @media screen and (min-width: 768px){
        height: 11.5em;
        background-image: url('/images/bg-boost-desktop.svg');
    }
`