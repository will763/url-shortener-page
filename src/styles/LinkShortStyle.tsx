import styled from "styled-components";

interface Props {
    copied : boolean
}


export const LinkShortStyle = styled.div<Props>`
    margin-top: 1.8rem;
    position: relative;
    background-color: white;
    width: 90%;
    height: 8em;
    border-radius: .3rem;
    text-align: left;
    padding: 1em;

    .link-full {
        overflow-x: hidden;
        text-overflow: ellipsis;
        color: hsl(257, 27%, 26%);
        font-weight: 500;
        font-size: .9em;
        max-width: 100%;
    }

    .link-full::after {
        content:"";
        position: absolute;
        top: 2.8rem;
        left: 0%;
        width: 100%;
        height: 1px;
        background-color: hsla(0, 0%, 75%,.6);
    }

    .link-shortener {
        overflow-x: hidden;
        text-overflow: ellipsis;
        margin-top: .9rem;
        font-weight: 500;
        color: hsl(180, 66%, 49%);
        font-size: .9em;
        max-width: 100%;
        white-space: nowrap;
    }

    button {
        margin-top: .5rem;
        border: none;
        background-color: ${props => props.copied ? `hsl(257, 27%, 26%)` : `hsl(180, 66%, 49%)`};
        height: 2.3em;
        width: 100%;
        border-radius: .3em;
        font-size: .8em;
        font-weight: 700;
        color: white;
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        width: 80%;
        height: 3em;

    .link-full {
        margin-right: auto;
    }

    .link-full::after {
        display: none;
    }

    .link-shortener {
        max-width: 20%;
        margin-top: 0rem;
    }

    button {
        height: 2.5em;
        margin-top: 0;
        width: 6rem;

    }
}
`;