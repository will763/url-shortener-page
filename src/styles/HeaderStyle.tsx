import styled from "styled-components";

interface menu {
  menuOpen : boolean
}

export const HeaderStyle = styled.header<menu>`
  padding: 0 5%;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-logo {
      width: 6em;
      height: 1.5em;
  }

  .icon-menu {
      width: 1.3em;
      height: 1.3em;
      cursor: pointer;
  }

  .menu {
    display: ${props => props.menuOpen ? "block" : "none"};
    padding: 1.8em 2em;
    color: white;
    position: absolute;
    z-index: 1;
    top: 4rem;
    left: 5%;
    right: 5%;
    background-color: hsl(257, 27%, 26%);
    width: 90%;
    height: 54vh;
    text-align: center;
    border-radius: .8rem;
  }

  .menu nav {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu nav::after{
    content: "";
    position: relative;
    width: 100%;
    height: 1px;
    background-color:  hsla(0, 0%, 75%,.3);
  }

  .menu nav a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    font-size: 1.1em;
  }

  .menu .enter-section {
    padding-top: 1em;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu .enter-section h5{
    font-size: 1em;
  }

  .menu .enter-section .sign-up{
    cursor: pointer;
    background-color: hsl(180, 66%, 49%);
    border-radius: 2rem;
    padding: .5em 0;
    height: 2.5em;
    transition: filter .28s;
  }

  .menu .enter-section .sign-up:hover{
    filter: brightness(110%);
  }

`;