import styled from "styled-components";

export const IntroStyle = styled.div`
   padding: 2.5em 0;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;

   h1 {
       width: 8em;
       line-height: 1.2em;
       color: hsl(257, 27%, 26%);
   }

   p {
       margin: 1em 0;
       color: hsl(0, 0%, 75%);
       font-size: .9em;
       width: 82%;
   }

   @media screen and (min-width: 768px){
       text-align: left;
       align-items: flex-start;

       h1 {
           font-size: 2.5em;
       width: 8em;
       line-height: 1.2em;
       color: hsl(257, 27%, 26%);
     }

       p {
       margin: 0;
       width: 90%;
     }
   }
`;