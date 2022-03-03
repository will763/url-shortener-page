import styled from "styled-components";

export const IllustrationStyle = styled.div`
    height: 18em;
    width: 100%;

    img {
        height: 100%;
        width: 120%;
        transform: translateX(10%);
    }

    @media screen and (min-width: 768px){
        img {
        transform: translateX(20%);
      }
    }
`