import styled from "styled-components";

export const StatistiscItemStyle = styled.div`
  position: relative;
  width: 80%;
  height: 12em;
  background-color: white;
  border-radius: .3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      position: absolute;
      top: -2rem;
      background-color: hsl(257, 27%, 26%);
      border-radius: 50%;
  }

  div img {
      width: 2rem;
      height: 2rem;
  }
  

  h2 {
    margin-top: 2rem;
    font-size: 1.2em;
    color: hsl(257, 27%, 26%);
  }

  p {
    text-align: center;
    width: 86%;
    color: hsl(0, 0%, 75%);
  }
`;
