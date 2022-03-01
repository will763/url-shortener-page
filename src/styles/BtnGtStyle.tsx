import styled from "styled-components";

export const BtnGtStyle = styled.button`
    margin-top: .8em;
    height: 3em;
    width: 11em;
    background-color: hsl(180, 66%, 49%);
    border: none;
    border-radius: 1.5rem;
    color: white;
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;
    transition: filter .3s;

    &:hover {
        filter: brightness(110%);
    }
`