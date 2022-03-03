import styled from "styled-components";


export const AdvancedStatisticsStyle = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3em 0;
  background-color: hsla(0, 0%, 75%,.2);

  h1 {
    color: hsl(257, 27%, 26%);
  }

  p {
    margin: .8em 0;
    font-size: .8em;
    color: hsl(0, 0%, 75%);
    width: 80%;
  }

  .container {
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  }

  @media screen and (min-width: 768px) {
    p {
    width: 45%;
   }

   .container {
    padding: 0 10%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
   }

   .container div:nth-child(3) {
    margin-top: 2rem;
   }

   .container div:nth-child(5) {
    margin-top: 4rem;
   }

  }

  @media screen and (min-width: 1048px) {
    p {
    width: 30%;
   }
  }
`;