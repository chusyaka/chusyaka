import React from "react";
import "./style.css";
import Container from "../../shared/ui/container";

function Bunner() {
  return (
    <div className="divban">
      <Container className="banner">
        <img className="log" src="/projeco-logo.png" alt="" />

        <div className="ban">
          <p className="partner">PARTNER WITH KONSTUCT</p>
          <p className="an">An award-winning construction management firm</p>
        </div>
        
        <p className="scroll">SCROLL DOWN</p>
      </Container>
      <Container className="menu">
        <img className="logo" src="/projeco-logo-black.png" alt="logo" />
        <ul className="ul">
          <li className="li">HOME</li>
           <li className="li">ABOUT</li>
           <li className="li">SERVICES</li>
           <li className="li">WORK</li>
           <li className="li">CONTACT</li>
         </ul>
      </Container>
    </div>
    
  );
}
export default Bunner;
