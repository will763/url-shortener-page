import { useEffect, useState } from "react";
import { HeaderStyle } from "../styles/HeaderStyle";

function Header(){
   const [isOpen,setIsOpen] = useState<boolean>(false);

   useEffect(()=>{
    const iconMenu = document.querySelector(".icon-menu");
    if(isOpen){
       iconMenu?.setAttribute("src","/images/icon-close.svg")
    }else
       iconMenu?.setAttribute("src","/images/hamburger-icon.svg")
    

   },[isOpen])

    return(
        <HeaderStyle menuOpen={isOpen} >
        <img className="icon-logo" src="/images/logo.svg" alt="logo-icon" />
        <div className="menu">
            <nav>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </nav>
            <section className="enter-section">
                <h5>Login</h5>
                <h5 className="sign-up">Sign Up</h5>
            </section>
        </div>
        <img className="icon-menu" onClick={()=>{setIsOpen(!isOpen)}} src="/images/hamburger-icon.svg" alt="toggle-menu-icon" />
        </HeaderStyle>
    )
}

export default Header;