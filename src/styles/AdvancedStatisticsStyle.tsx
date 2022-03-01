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
`;