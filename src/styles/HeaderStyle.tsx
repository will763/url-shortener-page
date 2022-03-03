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

  @media screen and (min-width: 768px){
    padding: 0 10%;

    .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    color: hsl(0, 0%, 75%);
    position: relative;
    top: 0rem;
    left: 0%;
    right: 0%;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius:0rem;
   }

   .menu nav {
    margin-left: 2.8rem;
    width:12.5rem;
    height: 100%;
    align-items: center;
    flex-direction: row;
   }

   .menu nav::after{
    display: none;
  }

   .menu nav a {
    color: hsl(0, 0%, 75%);
    font-size: .75em;
    transition: color .28s;
  }

   .menu .enter-section {
    font-size: .75em;
    width: 9.5rem;
    padding-top: 0em;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
   }

   .menu .enter-section .sign-up{
    width: 7em;
    color: white;
    padding: .5em 0;
  }

   .icon-menu {
     display: none;
   }

   .menu nav a:hover {
    color: hsl(257, 27%, 26%);
   }

  }

`;