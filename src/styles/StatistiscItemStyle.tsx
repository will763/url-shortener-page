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
  
  @media screen and (min-width: 768px) {
    padding: 0 1rem;
    width: auto;
    height: 13em;
    align-items: flex-start;

    h2 {
    text-align: left;
    font-size: 1em;
  }
   
   
    p {
    font-size: .7em;
    width: 100%;
    text-align: left;
    color: hsl(0, 0%, 75%);
   }

  }

  @media screen and (min-width: 1025px){
    padding: 0 1.2rem;
     
    h2 {
    font-size: 1.2em;
  }
    p {
    font-size: .8em;
    }
  }

`;
